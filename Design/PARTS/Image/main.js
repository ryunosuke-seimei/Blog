window.onload = function(){
  let h = window.innerHeight;
  let w = window.innerWidth;
  console.log(h);
  console.log(w);
  let deg = Math.atan(h/w) * 180 / Math.PI;
  console.log(deg);

  document.getElementById("LeftTop").style.transform = "rotateZ("+deg+"deg)";
  document.getElementById("RightTop").style.transform = "rotateZ(-"+deg+"deg)";
  document.getElementById("LeftBottom").style.transform = "rotateZ(-"+deg+"deg)";
  document.getElementById("RightBottom").style.transform = "rotateZ("+deg+"deg)";

}
