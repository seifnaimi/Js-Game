var false=0;
function game(min, max)
{
    return min+Math.floor(Math.random());
}
var nbr=game(0,10);
console.log(nbr);
do{
    var nombre=prompt("nombre entre 0 et 10");
    if(nombre>nbralea)
{
    alert("biggest!");
    false++;
}
if (nombre<nbr)
{
    alert("smallest!");
    false++;
}
if (nombre==nbr)
{
    alert("good");
    break;
}
}
while (false < 3);
if (false==3)
{
    console.log("lost");
}