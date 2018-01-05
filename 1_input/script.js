function fun1(){
var ch;
ch=document.getElementById('one');

if(ch.checked){
    alert('Confirm!');
}
else{
    alert('Ignor!');
}
}



function fun2(){
    var radio=document.getElementsByName('r1');
    for(var i=0; i<radio.length;i++){
        if(radio[i].checked){
            alert("U choose: " +i+ " element");
        }
    }
}


