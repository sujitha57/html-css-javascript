function validPerson()
{
  let person;
  let temp=0;
  person = prompt("Please enter your first name", "Honey");
  for(let i=0;i<person.length;i++)
  {
      let x = person.charAt(i);
      if(x=='#' || x=='$' || x=='%' || x=='^' || x=='&' || x=='!' || x=='(' || x==')')
        temp=0;
      else
        temp=1;
  }
  if(temp==0)
  {
    alert("Name must be valid");
    validPerson();
  }
  else
    confirm("Valid person\n Press Ok button");
}

function login()
{
  var username, password;
  username= document.forms["login"]["username"].value;
  password= document.forms["login"]["password"].value;
  for(let i=0;i<username.length;i++)
  {
    let x= username.charAt(i);
      if(x=='#' || x=='$' || x=='%' || x=='^' || x=='&' || x=='!' || x=='(' || x==')')
        alert("Special characters are not allowed");
  }
  for(let i=0; i<password.length;i++)
  {
    let x = password.charAt(i);
    if( x=='#' || x=='$' || x=='%' || x=='^' || x=='&' || x=='!' || x=='(' || x==')' )
      alert("Password must be alphabet");
  }

}
