const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
var ObjEmployee=[
    {
        username:"mahmoud",
        passwd:"12345"
    },
    {
        username:"tata",
        passwd:"0123"

    }
]
function login()
{
    var username=document.getElementById("username").value
    var passwd=document.getElementById("passwd").value

    for(i =0;i<ObjEmployee.length;i++)
    {
          if (username==ObjEmployee[i].username && passwd==ObjEmployee[i].passwd)
          {
            console.log(username+"is logged in :) ")
            return
          }
    }
    console.log("incorrect username or password")
}

function registerEmployee()
{
    var newUsername=document.getElementById("newUsername").value
    var newPasswd=document.getElementById("newPassword").value
    var newLastname=document.getElementById("newLastname").value
    var newEmail=document.getElementById("newEmail").value
    var newFirstname=document.getElementById("newFirstname").value
    var newAge=document.getElementById("age").value
var newEmployee={
    username:newUsername,
    passwd:newPasswd,
    firstname:newFirstname,
    lastname:newLastname,
    Email:newEmail,
    Age:newAge
}
   for(i=0;i<ObjEmployee.length;i++)
   {
    if(newUsername==ObjEmployee[i].username)
    {
        alert("that username is already in use, please choose another")
       return
    }else if (newPasswd.length <8)
    {
        alert("that password is too short, include 8 or more characters")
        return
    }
   }
  ObjEmployee.push(newEmployee)
  console.log(ObjEmployee)
}