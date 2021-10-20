
//Fun with Buttons

//Button1
document.querySelector("#myButton").onclick = function(){

    const h1 = document.querySelector("#myH1");
    const button = document.querySelector("#myButton");
    const body = document.querySelector("body");
    const button2 = document.querySelector("#myButton2");
    const button3 = document.querySelector("#myButton3");

    body.style.backgroundColor = "#000"
    
    h1.style.color = "#00FF00";
    h1.style.backgroundColor = "#000";
    h1.style.fontFamily = "consolas";
    h1.style.textAlign = "center";
    h1.style.border = "3px solid";
    h1.innerText = "Sup World";

    button.style.position = "relative";
    button.style.margin = "0.5em 0.5em";
    button.style.padding = "0.8em 2.2em";
    button.style.cursor = "pointer";
    button.style.background = "#000";
    button.style.color = "#03e9f4";
    button.style.textAlign = "center";
    button.style.border = "4px solid";
    button.style.borderRadius = "0.8em";
    button.style.fontSize = "15px";
    button.style.fontWeight = "500";
    button.style.fontFamily = "consolas";

    button2.style.position = "relative";
    button2.style.margin = "0.5em 0.5em";
    button2.style.padding = "0.8em 2.2em";
    button2.style.cursor = "pointer";
    button2.style.background = "#000";
    button2.style.color = "#ee00dd";
    button2.style.textAlign = "center";
    button2.style.border = "4px solid";
    button2.style.borderRadius = "0.8em";
    button2.style.fontSize = "15px";
    button2.style.fontWeight = "500";
    button2.style.fontFamily = "consolas";

    button3.style.position = "relative";
    button3.style.margin = "0.5em 0.5em";
    button3.style.padding = "0.8em 2.2em";
    button3.style.cursor = "pointer";
    button3.style.background = "#000";
    button3.style.color = "#FF0000";
    button3.style.textAlign = "center";
    button3.style.border = "4px solid";
    button3.style.borderRadius = "0.8em";
    button3.style.fontSize = "15px";
    button3.style.fontWeight = "500";
    button3.style.fontFamily = "consolas";
    
}

//Button2
document.querySelector("#myButton2").onclick = function(){

    const h1 = document.querySelector("#myH1");
    const body = document.querySelector("body");;

    body.style.backgroundColor = "#360163"
    
    h1.style.color = "#FFF";
    h1.style.backgroundColor = "#000";
    h1.style.fontFamily = "consolas";
    h1.style.textAlign = "center";
    h1.style.border = "3px solid";
    h1.innerText = "Howdy World!";

    
}
//Button3
document.querySelector("#myButton3").onclick = function(){
    const h1 = document.querySelector("#myH1");
    const body = document.querySelector("body");

    body.style.backgroundColor = "#FFFFFF";
    h1.style.color = "#000";
    h1.style.backgroundColor = "#FFF";
    h1.style.margin="none";
    h1.style.fontFamily = "none";
    h1.style.border = "none";
    h1.innerText = "Bye World";
}
