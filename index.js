var string="";
let length=document.querySelectorAll('.btn').length;

for(i=0;i<length;i++){
    var btn=  document.querySelectorAll('.btn')[i];
    btn.addEventListener("click",function(){
        var data=this.innerHTML;
        keypressed(data);
        // console.log(data);
    });
}
    document.addEventListener("keypress",function(event){
        console.log(event.key);
        keypressed(event.key)
    });
    function keypressed(data){
    if(data =="="){
        var result=eval(string);
        document.getElementById('user').value=result;
        string='';
        string=string+result;
    }
    else if(data=="AC" || data =="Delete"){
        string= " ";
        document.getElementById('user').value=string;
    }
    else if(data=="DEL"){
        var len=string.length;
        // console.log(len);
        string=string.slice(0,len-1);
        // console.log(string);
        document.getElementById('user').value=string;
    }
    else{
    string=string + data;
    document.getElementById('user').value=string;
}
}



