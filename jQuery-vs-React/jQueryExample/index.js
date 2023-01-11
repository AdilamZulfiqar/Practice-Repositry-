let persons = ["Zahid","Nouman","Ali"];

function testSort(){
persons.sort();
populatePersons();
}
function populatePersons()
{
    /*search the tag first whoch you want to make the change, searching is very time consuming.
    after getting the specific tag, you were goin to make that change. */
    $("#persons").html("");

    for(var i = 0; i<persons.length;i++)
    {
        $("#persons").append("<li>"+persons[i]+"</li>");
    }
}

$(function(){
    populatePersons();
})