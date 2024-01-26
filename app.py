from flask import Flask, render_template, request, redirect, send_file
from pytube import YouTube
import os
import shutil

app = Flask(__name__)

@app.route("/")
def mainpage():
    return render_template("mainpage.html")

FilePath = os.getcwd()

@app.route("/mainpage-MP4-post", methods=["POST"])
def MP4():
    reqMP4 = request.form["MP4URLTextBox"]
    new_folder_path = os.path.expanduser('./static/musicFolder')
    if (not os.path.exists(new_folder_path)):
        os.mkdir(new_folder_path)
    global yt
    yt = YouTube(reqMP4)
    yt.streams.get_highest_resolution().download(os.path.expanduser("./static/musicFolder"))
    return redirect("/MP4_downloadPage")

@app.route("/mainpage-MP3-post", methods=["POST", "GET"])
def MP3():
    reqMP3 = request.form["MP3URLTextBox"]
    new_folder_path = os.path.expanduser('./static/musicFolder')
    if (not os.path.exists(new_folder_path)):
        os.mkdir(new_folder_path)
    global video
    video = YouTube(reqMP3)
    streams =  video.streams.filter(only_audio=True).first()
    streams.download(os.path.expanduser("./static/musicFolder"), filename=f"{video.title}.mp3")
    return redirect("/MP3_downloadPage")

@app.route("/MP4_downloadPage", methods=["GET", "POST"])
def MP4_downloadPage():
    print(yt.title)
    download_Text_MP4 = {
        "MP4_download_name": f"{yt.title}"
    }
    return render_template("MP4_downloadPage.html", downloadText = download_Text_MP4)

@app.route("/MP3_downloadPage", methods=["GET", "POST"])
def MP3_downloadPage():
    download_Text_MP3 = {
        "MP3_download_name": f"{video.title}"
    }
    return render_template("MP3_downloadPage.html", downloadText = download_Text_MP3)

@app.route("/completeDownload", methods=["GET", "POST"])
def completeDownload():
    shutil.rmtree(os.path.expanduser("./static/musicFolder"))
    return redirect("/")

@app.route("/history", methods=["GET"])
def getHistory():
    return render_template("history.html")

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=2008)