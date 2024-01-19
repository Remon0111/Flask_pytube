window.onload = function() {
    let downloadExtension = document.getElementById("Extension");
    downloadExtension.onchange = changeCategory;
}

function changeCategory() {
    let downloadExtension = document.getElementById("Extension");
    let selectdownload = document.getElementById("selectdownload");
    let selectURLTextBox = document.getElementById("selectURLTextBox");
    let selectPathTextBox = document.getElementById("selectPathTextBox");
    let MP4downloadButton = document.getElementById("MP4download");
    let MP4URLTextBox = document.getElementById("MP4URLTextBox");
    let MP4PathTextBox = document.getElementById("MP4PathTextBox");
    let MP3downloadButton = document.getElementById("MP3download");
    let MP3URLTextBox = document.getElementById("MP3URLTextBox");
    let MP3pathTextBox = document.getElementById("MP3PathTextBox");
    if (downloadExtension.value == "選択") {
        selectdownload.style.display = "inline";
        selectURLTextBox.style.display = "inline";
        selectPathTextBox.style.display = "inline";
        MP4downloadButton.style.display = "none";
        MP4URLTextBox.style.display = "none";
        MP4PathTextBox.style.display = "none";
        MP3downloadButton.style.display = "none";
        MP3URLTextBox.style.display = "none";
        MP3pathTextBox.style.display = "none";
    }else if (downloadExtension.value == "MP4"){
        selectdownload.style.display = "none";
        selectURLTextBox.style.display = "none";
        selectPathTextBox.style.display = "none";
        MP4downloadButton.style.display = "inline";
        MP4URLTextBox.style.display = "inline";
        MP4PathTextBox.style.display = "inline";
        MP3downloadButton.style.display = "none";
        MP3URLTextBox.style.display = "none";
        MP3pathTextBox.style.display = "none";
    }else if (downloadExtension.value == "MP3"){
        selectdownload.style.display = "none";
        selectURLTextBox.style.display = "none";
        selectPathTextBox.style.display = "none";
        MP4downloadButton.style.display = "none";
        MP4URLTextBox.style.display = "none";
        MP4PathTextBox.style.display = "none";
        MP3downloadButton.style.display = "inline";
        MP3URLTextBox.style.display = "inline";
        MP3pathTextBox.style.display = "inline";
    }
}