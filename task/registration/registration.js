function $(id){
	return document.getElementById(id);
}
function disable(id){
	$(id).style.display ="none";
}
function enable(id){
	$(id).style.borderBottom = "2px solid black";
	$(id).style.color = "black";
}
function errorenable(id){
	$(id).style.borderBottom = "2px solid white";
	$(id).style.borderBottom = "thick solid red";
	$(id).style.color = "red";
}
function displaying(id){
	$(id).style.border = "";
	$(id).value = "";
}
function msg(id){
	$(id).style.display = "block";
}

function fnmsg(){
    let fname = $('firstname').value;
    let temp=0;
    for(let i=0; i<fname.length; i++){
    	let char=fname.charCodeAt(i);
        if ((char > 64 && char < 91) || (char > 96 && char < 123)){
            temp++;
          }else{
					msg("firstnamemsg");
					disable("fnemptymsg");
          errorenable("firstname");
          temp--;
		    }
    }
    if(temp==fname.length){
      disable("firstnamemsg");
			disable("fnemptymsg");
			enable("firstname");
    }
    else
      return fnmsg();
}
function fnempty(){
  let fname = $("firstname").value;
  if (fname.length==0){
		msg("fnemptymsg");
    errorenable("firstname");
  }
}
function lnmsg(){
    let lname = $("lastname").value;
    let temp=0;
    for(let i=0; i<lname.length; i++)	{
    	let char=lname.charCodeAt(i);
        if ((char > 64 && char < 91) || (char > 96 && char < 123)) {
            temp++;
        } else {
					msg("lastnamemsg");
					disable("fnemptymsg");
          errorenable("lastname");
          temp--;
		    }
    }
    if(temp==lname.length)  {
      disable("lastnamemsg");
			disable("lnemptymsg");
      enable("lastname");
    }
    else
      return lnmsg();
}
function lnempty(){
  let lname = $("lastname").value;
  if(lname.length==0){
	  msg("lnemptymsg");
    errorenable("lastname");
  }
}
function emailfunction(){
    let email = $("email").value;
    let pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let res = pattern.test(email);
    if(res==true)
    {
    	disable("emailmsg");
      enable("email");
	  }
    else
    {
      msg("emailmsg");
      errorenable("email");
    }
}
function descEmpty(){
  let des=$("description").value;
  if(des.length==0)
    msg("descriptionmsg");
  else
    disable("descriptionmsg");
}
function exclusiveHobby(){
  msg("hobby10");
  let unCheck = document.getElementsByClassName("hobby");
  for(let i= 0; i< unCheck.length; i++){
    unCheck[i].checked = false;
    unCheck[i].disabled = true;
  }

}
function dateValidation(){
  msg("valid");
  let day = $("day");
  let dd = day.options[day.selectedIndex].text;
  let month = $("month");
  let monthselct = month.options[month.selectedIndex].text;
  let year = $("year");
  let yy =  year.options[year.selectedIndex].text;
  let leap
  let res=true;
  let mm;
  if((yy%400 == 0) || (yy%4 == 0) && !(yy%100 == 0))
    leap = true;
  else
    leap = false;
  switch(monthselct)
  {
    case "JANUARY":
      mm=1;break;
    case "FEBRUARY":
      mm=2;
      if(((dd == 29)||(dd == 30)||(dd == 31))&&(leap == false))
        res = false;
      break;
    case "MARCH":
      mm=3;break;
    case "APRIL":
      mm=4;
      if(dd == 31)
        res = false;
      break;
    case "MAY":
      mm=5;break;
    case "JUNE":
      mm=6;
      if(dd == 31)
        res = false;
      break;
    case "JULY":
      mm=7;break;
    case "AUGUST":
      mm=8;break;
    case "SEPTEMBER":
      mm=9;
      if(dd == 31)
        res = false;
      break;
    case "OCTOBER":
      mm=10;break;
    case "NOVEMBER":
      mm=11;
      if(dd == 31)
        res = false;
      break;
    case "DECEMBER":
      mm=12;break;
  }
  if(res == false){
    msg("valid");
		errorenable("valid");
    $("bday").value = "Confirm";
  }
  else{
    disable("valid");
    $("bday").value = "Confirmed";
  }

}
function previewFile(){
       var fileview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('#upload').files[0]; //sames as here
       var reader  = new FileReader();
       reader.onloadend = function () {
         fileview.src = reader.result;
       }
       if (file)
           reader.readAsDataURL(file); //reads the data as a URL
       else
           fileview.src = "";
       msg("image");
}
  previewFile();
function addCurrentDate(){
  let date= new Date();
	let year = date.getFullYear();
  let monthArray = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
  var years = $("year");
  var month = $("month");
  var day = $("day");
  for (var i=31; i >= 1;--i) {
      var dayOptions = document.createElement('option');
      dayOptions.text = i;
      dayOptions.value = i
      day.add(dayOptions,1);
    }
    for (var i=11; i >= 0;--i) {
      var monthOptions = document.createElement('option');
      monthOptions.text = monthOptions.value = monthArray[i];
      month.add(monthOptions, 1);
    }
  for(var i = year; i >= 2000; --i){
    var option = document.createElement('option');
    option.text = option.value = i;
    if((years.length) < (year-2000+1))
    	years.add(option, 1);
  }
}
function cancel(){
  window.history.back();
}
function reset(){
  disable("firstnamemsg");
  displaying("firstname");
  disable("lastnamemsg");
  displaying("lastname");
  disable("emailmsg");
  displaying("email");
  $("day").value = "DD";
  $("month").value = "MM";
  $("year").value = "YY";
  disable("valid");
  displaying("description");
  disable("descriptionmsg");
  $("male").checked = true;
  let unCheck=document.getElementsByClassName("hobby");
  for(let i= 0; i< unCheck.length; i++){
    unCheck[i].checked = false;
    unCheck[i].disabled = false;
  }
  disable("hobby10");
  $("exclusive").checked=false;
  function exclusiveHobby(){
    $("hobby10").style.display = "block";
  }
  $("upload").value ="";
  disable("image");

}
function submit(){
	alert("Registration form submitted successfully!");
	cancel();
}
