from pytube import YouTube

yt = str(input("ダウンロードしたい動画のURLを記入してください:"))
YouTube(yt).streams.get_highest_resolution().download()