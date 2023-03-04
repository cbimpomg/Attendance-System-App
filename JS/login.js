
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
        passwd:"password25"
    },
    {
        username:"tata",
        passwd:"0123"

    }
]
window.localStorage.setItem("Admin",JSON.stringify({username:"Admin",passwd:"admin"}))


function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  // Generate a random unique code
  const code = generateRandomString(6);
  


function sendMail(email){
    Email.send({
        SecureToken : "4e21e031-af20-4fe9-b33f-a52ded0dcd07",
        To : email,
        From : "ITI_AttendanceSystem_jsProject@gmail.com",
        Subject : "UserName and Password",
        Body : `username:${generateRandomString(5)} \npassword: ${generateRandomString(6)}\n
        Please, don't share this information!`
    }).then(
      message => alert(message + email)
    );
}

var currentUser=""
function login()
{
    var username=document.getElementById("username").value
    var passwd=document.getElementById("passwd").value
         
        if (username=="Admin" && passwd=="admin")
          {
            window.location.assign("../HTML/AdminPanel.html")
            currentUser=username
            console.log("hello admin man :) ")
            return
          }else if (username==(JSON.parse(localStorage.getItem(username))).username && passwd==(JSON.parse(localStorage.getItem(username))).passwd)
          {
            window.location.assign("../HTML/home.html")
            currentUser=username
            window.sessionStorage.setItem("currentUser",username)
            console.log(username+"is logged in :) ")
            return
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
    
     newEmployee={
        username:newUsername,
        passwd:newPasswd,
        firstname:newFirstname,
        lastname:newLastname,
        Email:newEmail,
        Age:newAge,
        Admin:true,
        secuiryMan:true,
        Att_times:0, 
        Late_times:0,
        Absent_times:0,
        Att_at:"time"

    }
  
    // var datauser=JSON.parse(localStorage.getItem(newUsername)).username
    // console.log(datauser)
    // if(newUsername === (JSON.parse(localStorage.getItem(newUsername))).username)
    // {
    //     console.log("that username is already in use, please choose another")
    //    return
    // }else if (newPasswd.length <8)
    // {
    //     console.log("that username is already in use, please choose another")
    //     return
    // }
    sendMail(newEmail)

window.localStorage.setItem(newUsername,JSON.stringify(newEmployee))

window.location.assign("../HTML/home.html")

  return
}

