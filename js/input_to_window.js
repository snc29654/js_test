document.getElementById("execute").onclick = function() {
    const name = document.getElementById("any").value;

    nwin = window.open("", "Newwindow","width=280,height=480");
    nwin.document.open();
    nwin.document.write("<HTML><HEAD>");
    nwin.document.write("<TITLE>別ウインドウ</TITLE>");
    nwin.document.writeln("<BODY>");
    nwin.document.write(name);
    nwin.document.write("</BODY></HTML>");
    nwin.document.close();
};