var array = [];

function push(){
var inputQuestion = document.getElementById('inputQuestion').value;

array.push(inputQuestion);

var output = "";

for(i=0; i < array.length; i++)
{
    output = "</p><p>" + output + array[i] + "</p><br><p>";
}
document.getElementById('output').innerHTML = output;
}

