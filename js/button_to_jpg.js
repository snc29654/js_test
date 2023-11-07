function buttonClick1(){
    document.write("<img  src=\"img/img.jpg\" width=\"200\" height=\"150\">");
    document.write("<input type=\"button\" value=\"戻る\" onclick=\"buttonClick3()\">");
    document.write("<p>クリスマスツリー</p>");

}
function buttonClick2(){
    document.write("<img  src=\"img/img2.jpg\" width=\"200\" height=\"150\">");
    document.write("<input type=\"button\" value=\"戻る\" onclick=\"buttonClick3()\">");
    document.write("<p>花壇</p>");
}


function buttonClick5(){
    document.write("<img  src=\"../../jpg/1.jpg\" width=\"200\" height=\"150\">");
    document.write("<input type=\"button\" value=\"戻る\" onclick=\"buttonClick3()\">");
    document.write("<p>無題</p>");
    document.write("<img  src=\"../../jpg/20.jpg\" width=\"200\" height=\"150\">");
    document.write("<input type=\"button\" value=\"戻る\" onclick=\"buttonClick3()\">");
    document.write("<p>無題</p>");
    document.write("<img  src=\"../../jpg/30.jpg\" width=\"200\" height=\"150\">");
    document.write("<input type=\"button\" value=\"戻る\" onclick=\"buttonClick3()\">");
    document.write("<p>無題</p>");
}


function buttonClick3(){
    window.location.reload();
}