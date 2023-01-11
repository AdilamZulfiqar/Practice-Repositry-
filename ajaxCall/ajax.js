$(function() {
    $("#load").click(sendAjax);
});


function sendAjax(){
console.log("send ajax request");
$.get("student.txt", handleResponse)
console.log("ajax request sent");
}

function handleResponse(response){
    console.log("response received");
    console.log(response);
    $("#emptyDiv").empty();
    $("#emptyDiv").append(response);

   
}