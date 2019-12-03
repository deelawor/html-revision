//funtion that opens the home page if the inputs are correct(login.html)
function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }




function myUser(username,password) {
    var x = document.getElementById("username").value;
  
    var y = document.getElementById("password").value;



    if (x=="Toto" && y=="1111"||x=="toto@somemail.com" && y=="1111" || x=="Titi"
    && y=="2222" || x=="titi@omail.com" && y=="2222"){
        window.location.href = '/home.html'
       }
       
    else{
        alert("retry")
        
            
        }
}


function displayRadioValue() { 
    document.getElementById("result").innerHTML = ""; 
    var ele = document.getElementsByTagName('input'); 
      
    for(i = 0; i < ele.length; i++) { 
          
        if(ele[i].type="radio") { 
          
            if(ele[i].checked) 
                document.getElementById("result").innerHTML 
                        += ele[i].name + " Value: " 
                        + ele[i].value + "<br>"; 
        } 
    } 
} 
function end(){
    alert("Thank You :) "); 
} 


var timerid = 0;
var images = new Array(	"img/ani1.jpg",
                        "img/ani2.jpg",
                        "img/ani3.jpg");
var countimages = 0;
function startTime()
{
	if(timerid)
	{
		timerid = 0;
	}
	var tDate = new Date();
	
	if(countimages == images.length)
	{
		countimages = 0;
	}
	if(tDate.getSeconds() % 1 == 0)
	{
		document.getElementById("img1").src = images[countimages];
	}
	countimages++;
	
	timerid = setTimeout("startTime()", 3500);
}



