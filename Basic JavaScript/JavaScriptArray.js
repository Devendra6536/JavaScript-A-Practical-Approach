var ary =["Devendra Kumar ","Abdhesh Pal","Puneet Pal","VijayPal",true,false,15];
document.write("<ol>");
for(var i=0;i<7;i++){
    document.write("<li><b>"+ ary[i] + "<br>");
}
document.write("</ol>");
document.write("</ol>");
document.write("</ol>");
document.write("</ol>");

var array  = new Array(4);
array[0] = 10;
array[1] = 20;
array[2] = 30;
array[3] = "Devendra Kumar ";
array[4] = 40;
for(var i=0;i<5;i++){
    document.write("<li><b>"+ array[i] + "<br>");
}

/*var array  = new Array(4);
for(var g = 0; g<4;g++){
    array[g] = prompt("Enter The Value");
}
document.write("<ol>");
for(var i=0;i<5;i++){
    document.write("<li><b>"+ array[i] + "<br>");
}
document.write("</ol>");*/

var ary = [
    ["Devendra",20,"Male","B.tech"],
    ["Devendra",20,"Male","B.tech"],
    ["Devendra",20,"Male","B.tech"],
    ["Devendra",20,"Male","B.tech"],
    ["Devendra",20,"Male","B.tech"],
    ["Puneet",21,"Male","BBA"],
    ["Puneet",21,"Male","BBA"],
    ["Puneet",21,"Male","BBA"],
    ["Puneet",21,"Male","BBA"],
    ["Puneet",21,"Male","BBA"],
    ["Puneet",21,"Male","BBA"],
    ["Abdhesh",20,"Male","Polytechnic"],
    ["Abdhesh",20,"Male","Polytechnic"],
    ["Abdhesh",20,"Male","Polytechnic"],
    ["Abdhesh",20,"Male","Polytechnic"],
    ["Abdhesh",20,"Male","Polytechnic"],
    ["Vijay Pal",26,"Male","LLB"]
];
document.write("<center><h1>DataTable of Student</h1></center>");
document.write("<center>");
document.write("<table border='5px'font-style='' cellpadding='20px' cellspacing='0'>");
document.write("<tr><th>S.no</th><th>Name</th><th>Age</th><th>Gender</th><th>Course</th></tr>");
for(var i = 0 ; i<ary.length;i++){
    document.write("<tr> ");
    document.write("<td>"+ (i+1) +"</td>");
    
    for(var j = 0; j<ary[i].length;j++){
        document.write("<td>"+ary[i][j]+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("</center>");




var cnt = 1;
document.write("<br>");
document.write("<br>");
document.write("<center><h1>1 to 100</h1></center>");
document.write("<center>");
document.write("<table border='5px'font-style='' cellpadding='20px' cellspacing='0'>");
// document.write("<tr><th>S.no</th><th>Name</th><th>Age</th><th>Gender</th><th>Course</th></tr>");
for(var i = 0 ; i<=9;i++){
    document.write("<tr> ");
    // document.write("<td>"+ (i+1) +"</td>");

    for(var j = 0; j<=9;j++){
        document.write("<td>"+ (cnt++) +"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("</center>");

var cnt = 1;
var r=0;
var c=9;
document.write("<center><h1>1 to 100</h1></center>");
document.write("<center>");
document.write("<table border='5px'font-style='' cellpadding='20px' cellspacing='0'>");
// document.write("<tr><th>S.no</th><th>Name</th><th>Age</th><th>Gender</th><th>Course</th></tr>");
for(var i = 0 ; i<=9;i++){
    document.write("<tr> ");
    // document.write("<td>"+ (i+1) +"</td>");

    for(var j = 0; j<=9;j++){
        
        if(i==j) document.write("<td>"+ ("*") +"</td>");
        else if(i==r && j==c) document.write("<td>"+ ("*") +"</td>");
        else document.write("<td>"+ (cnt++) +"</td>");

    }
    r++;
    c--;
    document.write("</tr>");
}
document.write("</table>");
document.write("</center>");



var a =["Dk","puneet","Abdesh","vijay"];
document.write(a+"<br>");
delete a[0];
document.write(a);
var a =["Dk","puneet","Abdesh","vijay"];
document.write(a.sort()+"<br>");
document.write(a.reverse()+"<br>");
document.write(a.pop()+"<br>");
a.push("Promod");
a.push("Promod");
a.push("Promod");
document.write(a +" "+"<br>");


var a =["Dk","puneet","Abdesh","vijay"];
document.write(a +" "+"<br>");
a.shift();
document.write(a +" "+"<br>");
a.unshift("Devendra kumar pal garhikhanpur budaun uttar pradesh india ")
document.write(a +" "+"<br>");


var a =["Dk","puneet","Abdesh","vijay"];
var b =[" Devendra Kumar ","puneet","Abdesh","vijay"];
// var b = a.concat("rajeev","Sanjeev");
document.write(a.concat(b) +" "+"<br>");

var a =["Dk","puneet","Abdesh","vijay"];
var c = a.join("/");
document.write(c +" "+"<br>");

var a =["Dk","puneet","Abdesh","vijay"];
document.write(a.slice(1,4) +" "+"<br>");
document.write(a.slice(0) +" "+"<br>");
document.write(a.slice(-3) +" "+"<br>");
document.write(a.slice(-3,-2) +" "+"<br>");

a.splice(2,0,"Priya","kajal","Vishakha");
document.write(a +" "+"<br>");
var a =["Dk","puneet","Abdesh","vijay","Dk"];
document.write(a.indexOf("Dk",0) +" "+"<br>");
document.write(a.lastIndexOf("Dk") +" "+"<br>");

var ages = [15,25,75,48,68,10];
if(ages.some(checkChild))
{
    document.write("Yes! There are present");
}
else{
    document.write("NO! There are No child present");

}
function checkChild(age){
    return age<18;
}


var name = prompt("Enter your name");
document.write("<br>");
document.write("hello" + name);

var age = [10,58,74,54];
var adult = age.filter(checkAdult);
function checkAdult(age){
    return age>=18;
}

document.write(adult +" "+"<br>");

var age = [10,58,74,54];



var Name = ["Devendra Kumar Pal ", " Puneet Kumar ", "Abdesh Pal", "Vinod pal"," Raju Pal"];
Name.forEach(function(name){
    document.write("Hello"+name+ " How are you<br>");
});
