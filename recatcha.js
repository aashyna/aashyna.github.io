function dogSafety()
{
  var recatcha = "https;//aashyna.github.io/fyguj.html?";
  var lazy = recatcha.length;
  console.log(lazy);
  var ss = window.location.href.substring(lazy);
  console.log(ss);
  var arr = ss.split("&");
  console.log(arr);
  var signal = arr[0].split("=")[1];
  var finalSignal = signal.split("+");
  var newStuff = "";
  for(var x = 0; x < finalSignal.length; x++)
  {
    newStuff+=finalSignal[x]+" ";
  }
  console.log(newStuff);
}
dogSafety();
