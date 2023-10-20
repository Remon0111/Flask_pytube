from pytube import YouTube
import os

yt = str(input("ダウンロードしたい動画のURLを記入してください:"))
YouTube(yt).streams.get_highest_resolution().download(os.path.expanduser("~/Desktop"))