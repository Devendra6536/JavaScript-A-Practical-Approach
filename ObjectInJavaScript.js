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
