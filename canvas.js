var blackHoleLibrary;
var cloudPencil = [];





window.onload = function()
{
  pageUniverse.start();
  blackHoleLibrary = new bookworld(30,30,"Chartreuse",10,120);
}
var pageUniverse =
{
  canvas: document.createElement("canvas"),
  start: function()
  {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.textAlien = this.canvas.getContext("2d");
    var paraSpace = document.getElementById("paraSpace");
    paraSpace.appendChild(this.canvas);
    this.frameNo = 0;
    this.interval = setInterval(titleMilkyway,20);
    window.addEventListener("keydown",function(e)
    {
      pageUniverse.keys = (pageUniverse.keys ||[]);
      pageUniverse.keys[e.keyCode] = true;
    })
    window.addEventListener("keyup",function(e)
    {
      pageUniverse.keys[e.keyCode] = false;
    })
  },
  clear: function()
  {
    this.textAlien.clearRect(0,0,this.canvas.width,this.canvas.height);
  },
  stop: function()
  {
    clearInterval(this.interval);
  }
}
function everyInterval(n)
{
  if((pageUniverse.frameNo/n)%1==0)
  {
  return true;
  }
  return false;
}
function bookworld(width,height,color,x,y)
{
  this.width = width;
  this.height =  height;
  this.x = x;
  this.y = y;
  this.speedy = 0;
  this.speedx = 0;
  this.update = function()
  {
    shelfstar = pageUniverse.textAlien;
    shelfstar.fillStyle = color;
    shelfstar.fillRect(this.x,this.y,this.width,this.height);
  }
  this.newpos = function()
  {
    this.x+=this.speedx;
    this.y+=this.speedy;
  }
  this.crashWidth = function(otherObj)
  {
    var myLeft = this.x;
    var myRight = this.x+(this.width);
    var myTop = this.y;
    var myBottom = this.y+(this.height);
    var otherLeft = otherObj.x;
    var otherRight = otherObj.x+(otherObj.width);
    var otherTop = otherObj.y;
    var otherBottom = otherObj.y+(otherObj.height);
    var crash = true;
    if((myBottom<otherTop)||(myTop>otherBottom)||(myRight<otherLeft)||(myLeft>otherRight))
    {
      crash = false;
    }
    return crash;
  }
}
function titleMilkyway()
{

  var x;
  var y;
  var height,gap,minHeight,maxHeight,minGap,maxGap;
  for(i=0; i<cloudPencil.length; i+=1)
  {
    if(blackHoleLibrary.crashWidth(cloudPencil[i]))
    {
      pageUniverse.stop();
      return;
    }
  }
  pageUniverse.clear();
  pageUniverse.frameNo+=1;
  if(pageUniverse.frameNo==1||everyInterval(150))
  {
    x=pageUniverse.canvas.width;
    minHeight=20;
    maxHeight=200;
    height=Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
    minGap=50;
    maxGap=100;
    gap=Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
    cloudPencil.push(new bookworld(10,height,"skyblue",x,0));
  }
  for(i=0; i<cloudPencil.length; i+=1)
  {
    cloudPencil[i].x+=-1;
    cloudPencil[i].update();

  }
  blackHoleLibrary.newpos();
  blackHoleLibrary.update();
}
function moveUp()
{
  blackHoleLibrary.speedy-=1;
}
function moveDown()
{
  blackHoleLibrary.speedy+=1;
}
function moveRight()
{
  blackHoleLibrary.speedx+=1;
}
function moveLeft()
{
  blackHoleLibrary.speedx-=1;
}
function stopMove()
{
  blackHoleLibrary.speedx=0;
  blackHoleLibrary.speedy=0;
}
