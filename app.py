from flask import Flask, render_template, request
from pytube import YouTube
import os

app = Flask(__name__)

@app.route("/")
def mainpage():
    return render_template("mainpage.html")

@app.route("/mainpage-MP4-post", methods=["POST"])
def MP4():
    reqMP4_1 = request.form["MP4URLTextBox"]
    reqMP4_2 = request.form["MP4PathTextBox"]
    yt = reqMP4_1
    YouTube(yt).streams.get_highest_resolution().download(os.path.expanduser("~/Desktop"))
    return render_template("mainpage.html")

@app.route("/mainpage-MP3-post", methods=["POST"])
def MP3():
    reqMP3_1 = request.form["MP3URLTextBox"]
    reqMP3_2 = request.form["MP3PathTextBox"]
    video = YouTube(reqMP3_1)
    streams =  video.streams.filter(only_audio=True).first()
    streams.download(os.path.expanduser("~/Desktop"), filename=f"{video.title}.mp3")
    return render_template("mainpage.html")

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=2008)