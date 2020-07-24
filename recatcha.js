function dogSafety()
{
  var recatcha = "https;//aashyna.github.io/fyguj.html?";
  var lazy = recatcha.length;
  var ss = window.location.href.substring(lazy);
  var arr = ss.split("&");
  var signal = arr[0].split("=")[1];
  var finalSignal = signal.split("+");
  var newStuff = "";
  for(var x = 0; x < finalSignal.length; x++)
  {
    newStuff+=finalSignal[x]+" ";
  }
  console.log(newStuff);
  if (newStuff=="string grabbing toy")
  {
    alert("You failed! Going to you failed page...\n\nProccessing...\n\nProccessing...\n\nComplete!");
    window.location.href="love-dogs.html";
  }
}
dogSafety()
