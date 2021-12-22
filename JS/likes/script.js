var count=0;
var counter=document.querySelector("#likeCount");

function likeCount(){
    count++
    counter.innerText = count + " like(s)";
}