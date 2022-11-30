var user = {
    Name: "Devendra",
    Age : 18,
    village : "garhikhanpur",
    District: "Budaun",
    work:function(){
        document.write("Engineering");
    },
    fullname:function(){
        return this.Name+this.Age;
    },
    living:{
        "city":"Islamnager",
        village:"Garhikhanpur",
        pin:202523
    }
}
document.write(user.Name+"  ");
document.write(user.Age+"  ");
document.write(user.village+" ");
document.write(user.District+" ");
document.write(user.work()+" ");
document.write(user.fullname()+" ");
document.write(user.living.city+" ");
document.write(user.living.village+" ");
document.write(user.living.pin+" ");



var customer = new Object();
customer.Name = "Devendra kumar";
customer.age = 21;
customer.village = "Ghaziabad";

document.write(customer['Name']+"<br>");


var student =[
    {name:"Dk",rollNo:73},
    {name:"Puneet",rollNo:25},
    {name:"ak",rollNo:26},
    {name:"Devansh",rollNo:72},
];

student.forEach(function(name){
    document.write(name.name+" "+ name.rollNo+"<br>");
})