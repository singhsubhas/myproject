function letsSpin(){
    var x=1024;
    var y=9999;
    var deg=Math.floor(Math.random() * (x-y) +y);
        document.getElementById('wheel').style.transform = "rotate("+deg+"deg)";
    
}