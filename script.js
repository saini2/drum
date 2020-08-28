window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');   
    const classname = document.getElementsByClassName('equilizer');
    debugger
}
)

const key = document.querySelectorAll('.key');
key.forEach(element => {
    element.addEventListener('transitionend',removeClass);
});

function removeClass(e){
    if(e.propertyName !== 'transform'){return};
    console.log(this.classList);
    this.classList.remove('playing');
    console.log(this.classList);
}
