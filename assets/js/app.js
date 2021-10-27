


// CountDown
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const currentDay = new Date().getFullYear();

const newDay = new Date (`${currentDay + 1} 17:00:00`);

function updateCountDowntime(){
    const currentTime = new Date();
    const diff = newDay - currentTime;

    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000 ) % 60;
    
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    
}
setInterval(updateCountDowntime, 1000);
// Open, Close Modal
var siginBtn = document.querySelector('.sign-in');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal-close')

siginBtn.addEventListener('click',function(){
    modal.classList.add('modal-active')
})
modalClose.addEventListener('click',function(){
    modal.classList.remove('modal-active')
})

window.onclick = function(e){
    if(e.target == modal) {
        modal.classList.remove('modal-active')
    }
}