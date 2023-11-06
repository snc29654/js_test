function buttonClick1(){
    document.write("<img  src=\"img/img.jpg\" width=\"200\" height=\"150\">");
    document.write("<input type=\"button\" value=\"戻る\" onclick=\"buttonClick3()\">");


}
function buttonClick2(){
    document.write("<img  src=\"img/img2.jpg\" width=\"200\" height=\"150\">");
    document.write("<input type=\"button\" value=\"戻る\" onclick=\"buttonClick3()\">");
}

function buttonClick3(){
    window.location.reload();
}