var node=document.getElementsByTagName("LI");
var i;
for(i=0;i<node.length;i++){
    var span=document.createElement("span");
    var txt=document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    node[i].appendChild(span);
}

var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
        div.style.textAlign = "center";
    
    }
    
}

var list=document.querySelector("ul");
list.addEventListener('click',function(ev){
    if(ev.target.tagName==="LI"){
        ev.target.classList.toggle('checked');
    }
},false);


function newElement(){
    var li=document.createElement("li");
    var input=document.getElementById("input").value;
    var t=document.createTextNode(input);
    li.appendChild(t);
    if(input===""){
        alert("Write Some Notes");
    }
    else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("input").value="";
    
    var span=document.createElement("span");
    var txt=document.createTextNode("\u00D7");
    span.className= "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
            
        }
    }
}