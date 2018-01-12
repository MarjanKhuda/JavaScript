function plus(){
    var num1,num2,res;
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    res=num1+num2;
    
    document.getElementById('out').innerHTML = res;
}

function minus(){
    var num1,num2,res;
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    res=num1-num2;
    
    document.getElementById('out').innerHTML = res;
}

function double(){
    var num1,num2,res;
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    res=num1*num2;
    
    document.getElementById('out').innerHTML = res;
}

function divide(){
    var num1,num2,res;
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    res=num1/num2;
    
    document.getElementById('out').innerHTML = res;
}



