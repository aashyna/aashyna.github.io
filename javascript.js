// console.log("EeEEEEeEeeeeeEeeEEEEEeeeEEEeeeeeeeeeEEEeeeeeeeEEEE");
// var numberOfPets = 0;
// var numberOfArticles = numberOfPets * 2;
// console.log(numberOfArticles);
alert("nothing\n \ni said nothing\n \nwhy are you reading this i said nothing\n \nyou just wasted a precious five seconds oF your life");
var check = confirm("Do you love dogs?");
if(check)
{
  alert("Welcome to the secret base of dogs!");
}
else
{
  alert("ALERT ALERT INTRUDER INTRUDER LEAVE IMMEDIATELY OR YOU WILL BE DESTROYEDDDDDDDD");
  window.location.href="love-dogs.html";
}

function yOURtEXThERE()
{
  if(typeof(Storage) !== "undefined")
  {
     if(localStorage.TeXtAlIeN==null)
     {
       while(true)
       {
         var secretSecretSecret = prompt("yOURtEXThERE");
         if(secretSecretSecret==null ||secretSecretSecret=="")
         {
           alert("The dog gods do not aprove of this title. Please try again.");
         }
         else
         {
           break;
         }
       }
       var h1IScool = document.getElementById("eAthTmLaNdCsSwItHjS");
       h1IScool.innerHTML=secretSecretSecret;
       localStorage.TeXtAlIeN=secretSecretSecret;
     }
     else
     {
       var h1IScool = document.getElementById("eAthTmLaNdCsSwItHjS");
       h1IScool.innerHTML=localStorage.TeXtAlIeN;
     }
  }
}
