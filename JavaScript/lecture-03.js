
 /*function handleTodo(){
    console.log("handle todo");
}
*/

 /*
window.onload = function(){ //when document will get prepared
    console.log("bindings");
    var btn = document.getElementById("btnAdd");
    //btn.onclick = handleTodo; referce passed the function
    
    btn.onclick = function(){  //also an anynomous function

        console.log("handle todo");
    }
}

*/

window.onload = function(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAt;
}

function handleAt(){
    var ul = document.getElementById("myUl");
     
}
