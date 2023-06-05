function runCode() {
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = document.getElementById("cssCode").value;
    var jsCode = document.getElementById("jsCode").value;

    var outputFrame = document.getElementById("outputFrame").contentWindow.document;
    outputFrame.open();
    outputFrame.write(htmlCode + "<style>" + cssCode + "</style>");
    outputFrame.write("<script>" + jsCode + "</script>");
    outputFrame.close();
}
