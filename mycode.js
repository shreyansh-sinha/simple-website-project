function validateTextBox ()
{
	var box1=document.getElementById("username");
	var box2=document.getElementById("password");
	var box3=document.getElementById("email info");
	var box4=document.getElementById("mobile number");
	if(box1.value==""||box2.value.length<5||box4.value.length<10)
	{
		alert("Please enter again!!!")
   	box2.focus();
   	box2.style.border= "3px solid red";
   	return false;
   }
   	var conf=confirm("ARE THESE CHANGES FINAL?");
   	if(conf==true)
   	{

   	}
}


