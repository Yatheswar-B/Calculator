function result() {
   let data= document.getElementById('input1');
   let result=eval(data.value);
   data.value=result;
   
}

function clear1() {
    let data= document.getElementById('input1');
    data.value='';
}

function del() {
    let data= document.getElementById('input1');
    let num=data.value;
    data.value=num.slice(0,num.length-1)

}


   
