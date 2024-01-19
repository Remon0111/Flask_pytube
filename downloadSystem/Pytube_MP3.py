from pytube import YouTube
import os

url = str(input("URLを入力してください"))

video = YouTube(url)
streams =  video.streams.filter(only_audio=True).first()
streams.download(os.path.expanduser("~/Desktop"), filename=f"{video.title}.mp3")
