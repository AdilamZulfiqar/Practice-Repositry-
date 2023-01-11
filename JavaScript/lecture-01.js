function update(){
    console.log("update me");
    var input = document.getElementById("inputTag");
    var span = document.getElementById("spanTag");

    var temp = input.value;
    input.value = span.innerHTML;
    span.innerHTML = temp;

}