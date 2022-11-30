var a = 5.67455;
document.write(a.toFixed(1));

var num = 10000.0;
document.write(Number.parseFloat(num));
document.write(Number.parseInt(num));


document.write(Math.random()+"<br><br>");
document.write(Math.floor(Math.random()*6 + 1) +"<br><br>");

var a = Math.floor(Math.random()*6 + 1);


    document.write("<center><h1>DataTable of Student</h1></center>");
    document.write("<center>");
    document.write("<table border='5px'font-style='' cellpadding='20px' cellspacing='0'>");
    for(var i = 0 ; i<a/2;i++){
        document.write("<tr> ");        
        for(var j = 0; j<a;j++){
            document.write("<td>"+ "*"+"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    document.write("</center>");


    document.write(a);