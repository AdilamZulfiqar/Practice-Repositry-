function changeColor(){
    console.log("color changed");

    var pass = document.getElementById("passwordTag");
    if(pass.value == ""){
        pass.style.border = "2px solid red";
    }

    else{
        pass.style.border = "1px solid black";
    }
}