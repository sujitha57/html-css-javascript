var number = document.getElementsByClassName("numbers");
var left= 0;
var right =1;
function moving(n)
{
  document.getElementById("demo").innerHTML= left;
  if(n == 1)
  {
    left++;
    if(left > number.length)
      document.getElementById("right").disabled = true;
    document.getElementById("box").style.transform = "translateX(80px)";
  }
  if(n == -1)
  {
    left--
   document.getElementById("box").style.transform = "translateX(-80px)";
  }
}
