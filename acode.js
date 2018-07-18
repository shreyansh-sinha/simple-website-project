function validateTextBox ()
{
	var box1=document.getElementById("username");
	var box2=document.getElementById("email info");
	var box3=document.getElementById("mobile number");
	var box4=document.getElementById("city");
    var box5=document.getElementById("state");
	if(box1.value.length==""||box3.value.length<10)
	{
		alert("enter again")
		box3.focus();
		box3.style.border=" 2px solid red";
		return false;
	}
	var conf=confirm("Are these entries final?");
	if(conf=="true")
	{

	}
}