function pragraph_1() {
var inputs=[];
debugger
for (var i=1; i<=6; i++)
{
    inputs.push(document.getElementById("text_"+i).value);
}
    document.getElementById("sh-para-1").innerHTML= inputs.join(".");
}
function paragraph_2(){
    var inputs=[];
    for (var i=1; i<=6; i++)
    {
        inputs.push(document.getElementById("text2."+i).value);
    }
        document.getElementById("sh-para-2").innerHTML= inputs.join(".");
}



