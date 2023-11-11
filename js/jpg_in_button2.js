function buttonClick1(path){
    let imgset="<img  src="+path+" width=\"200\" height=\"150\">";
    document.write(imgset);
    document.write("<input type=\"button\" value=\"戻る\" onclick=\"buttonClick3()\">");

}


function buttonClick3(){
    window.location.reload();
}