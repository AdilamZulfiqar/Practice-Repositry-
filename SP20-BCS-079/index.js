$(function() {
    $("#button1").click(ClickMe);
});


function ClickMe(){
console.log("I am a button");
$.get("student.txt", handleResponse)
console.log("ajax request sent");
}


function handleResponse(response){
    console.log("response received");
}