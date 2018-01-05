function fun1(){

var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    
alert('Selected option: '+options[sel].text);
}
<!-- Select -->

function fun2(){
    var range=document.getElementById("r1");
    var p=document.getElementById("one");
    p.innerHTML=range.value;
}
function fun3(){
    var range2=document.getElementById("r2");
    var i1=document.getElementById("i1");
    i1.value=range2.value;
}
function fun4(){
    var range3=document.getElementById("r3");
    var i2=document.getElementById("test");
    i2.style.width=range3.value+"px";
}