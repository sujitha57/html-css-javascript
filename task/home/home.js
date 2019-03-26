function empDetails()
{
  document.getElementById("empDetails").style.display="block";
}
function editrow(num)
{
  document.getElementById("edit_button"+num).style.display="none";
  document.getElementById("save_button"+num).style.display="block";

   var name = document.getElementById("name_row"+num);
   var age = document.getElementById("age_row"+num);
   var joining = document.getElementById("joining_row"+num);

   var name_data = name.innetHTML;
   var age_data = age.innerHTML;
   var joining_data = joining.innerHTML;

  name.innerHTML = "<input type='text' id='name_text"+num+"' value='"+name_data+"'>";
  age.innerHTML = "<input type='text' id='age_text"+num+"' value='"+age_data+"'>";
  joining.innerHTML = "<input type='text' id='joining_text"+num+"' value='"+joining_data+"'>";

}
function saverow(num)
{
     var name_val = document.getElementById("name_text"+num).value;
     var age_val = document.getElementById("age_text"+num).value;
     var joining_val = document.getElementById("joining_text"+num).value;

     document.getElementById("name_row"+num).innerHTML = name_val;
     document.getElementById("age_row"+num).innerHTML = age_val;
     document.getElementById("joining_row"+num).innerHTML = joining_val;

     document.getElementById("edit_button"+num).style.display = "block";
     document.getElementById("save_button"+num).style.display = "none";
}
function deleterow(num)
{
  document.getElementById("row"+num).outerHTML = "";
}
function addrow()
{
  var new_name = document.getElementById("new_name").value;
  var new_age = document.getElementById("new_age").value;
  var new_joining_date = document.getElementById("new_joining_date").value;

  var table=document.getElementById("empDetalisList");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}
