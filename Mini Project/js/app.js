//funtion that opens the home page if the inputs are correct(login.html)
function myUser(username,password) {
    var x = document.getElementById("username").value;
    document.getElementById("username").innerHTML = x;
    var y = document.getElementById("password").value;
    document.getElementById("password").innerHTML = y;


    if (x=="Toto" && y=="1111"||x=="toto@somemail.com" && y=="1111" || x=="Titi"
    && y=="2222" || x=="titi@omail.com" && y=="2222"){
        window.location.href = '/home.html'
       }
       
    else{
        alert("retry")
        
            
        }
}

function end(){
    alert("Thank You :) "); 
} 




