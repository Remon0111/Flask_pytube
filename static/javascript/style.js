const sleep = (millieconds) => {
    return new Promise(resolve => setTimeout(resolve, millieconds))
}

const isdownloading = false
window.onload = function() {
    let downloadExtension = document.getElementById("Extension");
    downloadExtension.onchange = changeCategory;
    const MP3_input = document.getElementById("MP3URLTextBox");
    const MP3_download = document.getElementById("MP3download");
    const ErrorText = document.getElementById("downloadErrorText");

    MP3_input.addEventListener("change", function() {
        console.log(MP3_input.value)

        if (MP3_input.value.startsWith("https") && MP3_input.value.includes("youtu.be/") || MP3_input.value.startsWith("https") && MP3_input.value.includes("www.youtube.com/") || MP3_input.value.startsWith("https") && MP3_input.value.includes("music.youtube.com/")) {
            MP3_download.disabled = false;
            ErrorText.style.display = "none";
        } else {
            MP3_download.disabled = true;
            ErrorText.style.display = "inline";
        }
    });

    const MP4_input = document.getElementById("MP4URLTextBox");
    const MP4_download = document.getElementById("MP4download");

    MP4_input.addEventListener("change", function() {
        console.log(MP4_input.value)
        if (MP4_input.value.startsWith("https") && MP4_input.value.includes("youtu.be/") || MP4_input.value.startsWith("https") && MP4_input.value.includes("www.youtube.com/") || MP4_input.value.startsWith("https") && MP4_input.value.includes("music.youtube.com/")) {
            MP4_download.disabled = false;
            ErrorText.style.display = "none";
        } else {
            MP4_download.disabled = true;
            ErrorText.style.display = "inline";
        }
    });

}

function changeCategory() {
    let downloadExtension = document.getElementById("Extension");
    let selectdownload = document.getElementById("selectdownload");
    let selectURLTextBox = document.getElementById("selectURLTextBox");
    let MP4downloadButton = document.getElementById("MP4download");
    let MP4URLTextBox = document.getElementById("MP4URLTextBox");
    let MP3downloadButton = document.getElementById("MP3download");
    let MP3URLTextBox = document.getElementById("MP3URLTextBox");
    if (downloadExtension.value == "選択") {
        selectdownload.style.display = "inline";
        selectURLTextBox.style.display = "inline";
        MP4downloadButton.style.display = "none";
        MP4URLTextBox.style.display = "none";
        MP3downloadButton.style.display = "none";
        MP3URLTextBox.style.display = "none";
    }else if (downloadExtension.value == "MP4"){
        selectdownload.style.display = "none";
        selectURLTextBox.style.display = "none";
        MP4downloadButton.style.display = "inline";
        MP4URLTextBox.style.display = "inline";
        MP3downloadButton.style.display = "none";
        MP3URLTextBox.style.display = "none";
    }else if (downloadExtension.value == "MP3"){
        selectdownload.style.display = "none";
        selectURLTextBox.style.display = "none";
        MP4downloadButton.style.display = "none";
        MP4URLTextBox.style.display = "none";
        MP3downloadButton.style.display = "inline";
        MP3URLTextBox.style.display = "inline";
    }
}
