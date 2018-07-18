function validateTextBox ()
{
	var box1=document.getElementById("username");
	var box2=document.getElementById("email info");
	if(box1.value==""||box2.value=="")
	{
		alert("fields cant be empty")
		return false;
	}
	var conf=confirm("Are u sure?");
	if(conf==true)
	{
		
	}
}