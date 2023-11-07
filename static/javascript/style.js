function clickButton() {
    var input = document.getElementById("url");

    const errorText1 = document.getElementById("urlBoxErrorText");
    const errorText2 = document.getElementById("mistakeUrlBoxErrorText");

    if(input.value === ""){
        errorText1.style.display="block";
        errorText2.style.display="none";
    }else{
        errorText1.style.display="none";
        if(input.value.includes("https://www.youtube.com/watch?v=") || input.value.includes("https://youtu.be/")) {
            errorText2.style.display="none";
        }else {
            errorText2.style.display="block";
        }
    }
}