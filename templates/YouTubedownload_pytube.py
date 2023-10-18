from pytube import YouTube
import os

desktop_dir = os.path.expanduser("~/Desktop")

yt = str(input("URLを入力してください"))
YouTube(yt).streams.get_highest_resolution().download(desktop_dir)