from pytube import YouTube
import os

def MP4():
    yt = str(input("ダウンロードしたい動画のURLを記入してください:"))
    YouTube(yt).streams.get_highest_resolution().download(os.path.expanduser("~/Desktop"))