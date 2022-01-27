const one=document.getElementsByClassName('one');
const two=document.getElementsByClassName('two');
const three=document.getElementsByClassName('three');
const createdAt=document.getElementsByClassName('createdAt')[0];
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
createdAt.innerHTML+=date+' '+time;


one[0].addEventListener('click',()=>{
    window.location.href="components/quiz1/index.html"
})
two[0].addEventListener('click',()=>{
    window.location.href="components/quiz2/index.html"
})
three[0].addEventListener('click',()=>{
    window.location.href="components/quiz3/index.html"
})



