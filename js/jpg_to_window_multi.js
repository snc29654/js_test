document.getElementById("execute").onclick = function() {
    const name = document.getElementById("any").value;

    nwin = window.open("", "Newwindow","width=280,height=480");
    nwin.document.open();
    nwin.document.write("<HTML><HEAD>");
    nwin.document.write("<meta name=\"viewport\" content=\"width=device-width\"></meta>");
    nwin.document.write("<TITLE>画像ウインドウ</TITLE>");
    nwin.document.writeln("<BODY>");
    nwin.document.write("<script language=\"JavaScript\">");

    nwin.document.write("i = 0;");
    nwin.document.write("url = \"../../jpg/\";");                
    nwin.document.write("img = new Array(\"1.jpg\",\"13.jpg\",\"14.jpg\",\"15.jpg\",\"53.jpg\",\"19.jpg\",\"20.jpg\",\"3.jpg\",\"30.jpg\",\"33.jpg\");");
    nwin.document.write("function change(){");  
        nwin.document.write("i++;");
        nwin.document.write("if(i >= img.length) {");
            nwin.document.write("i = 0;");
            nwin.document.write("}");
            nwin.document.write("document.body.background = url + img[i];");
            nwin.document.write("}");
            nwin.document.write("function tm(){");               
                nwin.document.write("document.body.background = url + img[i];");
                nwin.document.write("tm = setInterval(\"change()\",5000);");
                nwin.document.write("}");

                nwin.document.write("</script>");


    nwin.document.write("</BODY></HTML>");
    nwin.document.close();
};