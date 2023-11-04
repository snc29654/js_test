document.getElementById("execute").onclick = function() {
    const name = document.getElementById("any").value;

    nwin = window.open("", "Newwindow","width=280,height=480");
    nwin.document.open();
    nwin.document.write("<HTML><HEAD>");
    nwin.document.write("<meta name=\"viewport\" content=\"width=device-width\"></meta>");
    nwin.document.write("<TITLE>画像ウインドウ</TITLE>");
    nwin.document.writeln("<BODY>");
    nwin.document.write("<img  src=\"img/img.jpg\" width=\"200\" height=\"150\"");
    nwin.document.write("</BODY></HTML>");
    nwin.document.close();
};