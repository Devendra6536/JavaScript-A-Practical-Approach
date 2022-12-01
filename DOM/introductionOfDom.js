// this is use for the all the elements
// it return an array of element we can access these element index wise
/*var element = document.all;
console.log(element);
console.log(element[3]);
console.log(element[7]);

// this is return the title of the document
console.log(element);
element = document.title;



// this is return the all the anchor tags of the document
element = document.links;
console.log(element);


// this is return the all the images tags of the document
element = document.images;
console.log(element);

// this is return the URL of the document
console.log(document.URL);
console.log(document.getElementById("wrapper"));

// this is return the Domain of the document
console.log(document.domain);

console.log(document.getElementsByClassName("box").innerHtml="HEllo");
console.log(document.getElementsByClassName("box"));
console.log(document.getElementsByName("ul"));



element = document.getElementById("wrapper").innerText;
console.log(element);
element = document.getElementById("wrapper").innerHTML;
console.log(element);

element = document.getElementById("wrapper").getAttribute("onClick");
console.log(element)


element = document.getElementById("wrapper").innerText="Bye";
console.log(element)

element = document.getElementById("wrapper").innerHTML="<h1>Bye</h1>";
console.log(element)

document.getElementById("wrapper").setAttribute("class","container");
element = document.getElementById("wrapper").getAttribute("class");
console.log(element)





console.log("Hello Devendra Kumar pal Garhikhanpur budaun uttar pradesh india 202523");
document.querySelector(".xyz").innerHTML="<h1>Devendra Kumar pal garhikhanpur budaun uttar pradesh </h1>";
console.log(document.querySelector(".xyz").innerHTML);

element = document.querySelectorAll(".xyz")[1].innerHTML;
console.log(element);*

element = document.querySelectorAll("div")[0].innerHTML;
console.log(element);

element = document.querySelectorAll(".xyz h1");
console.log(element);
element = document.querySelectorAll(".xyz h1")[0].innerHTML;
console.log(element);
element = document.querySelectorAll(".xyz h1")[1].innerHTML;
console.log(element);
element = document.querySelectorAll(".xyz h1")[2].innerHTML;
console.log(element);*/

document.querySelector(".xyz").style.backgroundColor="red"
document.querySelector(".xyz").style.fontSize="15px"
document.querySelector(".xyz").style.fontFamily="Cursive";
// document.querySelector(".xyz").style.border="5px solid blue";
document.querySelectorAll(".xyz h1")[2].style.border="5px solid blue";
document.querySelector("#wrapper").style.border="5px solid yellow";
document.querySelector("#wrapper").style.color="yellow";
document.querySelector("#wrapper").style.opacity="0.7";

document.querySelector("#wrapper").className = "abc container"; 
element = document.querySelector(".xyz").style.backgroundColor;
console.log(element);
