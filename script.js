let slides = document.querySelectorAll('.slide')
let texts = document.querySelectorAll('.text')
let slideArrey = Array.from(slides)
let textArrey = Array.from(texts)



// images slide
function Next(){
    let slideActive = document.querySelector('.slide.active')
    let CurrentActive = slideArrey.indexOf(slideActive)

    let next ;
    if(CurrentActive == slideArrey.length -1){
        next = slideArrey[0]  
    }else{
        next = slideArrey[CurrentActive + 1]
    }
   return [next]
}
function place(){
    let slideActive = document.querySelector('.slide.active')
    let CurrentActive = slideArrey.indexOf(slideActive)
    let [next] = Next()
    slideArrey.map((slide,index)=>{
        if(CurrentActive == index){
            slide.style.transform = 'translateX(0%)'
        }else if(slide == next){
            slide.style.transform = 'translateX(100%)'
        }
        slide.addEventListener('transitionend',function(){
            slide.classList.remove('smooth')
        })
    })
}
function slideToImages(){
    let slideActive = document.querySelector('.slide.active')
    let [next] = Next()
    next.classList.add('smooth')
    slideActive.classList.add('smooth')
    slideActive.classList.remove('active')
    slideActive.style.transform = 'translateX(-100%)'
    next.style.transform = 'translateX(0)'
    next.classList.add('active')
    place();
}
// next text slide
function nextSlideText() {
    let Activetext = document.querySelector('.active_text');
    let Currenttext = Array.from(textArrey).indexOf(Activetext);
    let nextText;
    if (Currenttext == textArrey.length - 1) {
        nextText = textArrey[0];
    } else {
        nextText = textArrey[Currenttext + 1];
    }

    return [nextText];
}
function placeToText() {
    let Activetext = document.querySelector('.text.active_text');
    let Currenttext = Array.from(textArrey).indexOf(Activetext);
    let [nextText] = nextSlideText();
    textArrey.map((text, index) => {
        if (Currenttext == index) {
            text.style.top = '-7px';
        } else if (text == nextText) {
            text.style.top = '-50px';
        }
        text.addEventListener('transitionend', function () {
            text.classList.remove('smooth_text');
        });
    });
}
function slideToText() {
    let Activetext = document.querySelector('.text.active_text');
    let [nextText] = nextSlideText();
    nextText.classList.add('smooth_text');
    Activetext.classList.add('smooth_text');
    Activetext.classList.remove('active_text');
    Activetext.style.top = '36px';
    nextText.style.top = '-7px';
    nextText.classList.add('active_text');
    placeToText();
}
let next1 = document.querySelector('.next');
next1.addEventListener('click', function () {
    slideToImages();
    slideToText();
});
function prevSlide(){
    let slideActive = document.querySelector('.slide.active')
    let CurrentActive = slideArrey.indexOf(slideActive)
    let prev ;
    if(CurrentActive == 0){
        prev = slideArrey[slideArrey.length - 1]  
      }else{
        prev = slideArrey[CurrentActive - 1]
      }
   return [prev]
}
function place2(){
    let slideActive = document.querySelector('.slide.active')
    let CurrentActive = slideArrey.indexOf(slideActive)
    let [prev] = prevSlide()
    slideArrey.map((slide,index)=>{
        if(CurrentActive == index){
            slide.style.transform = 'translateX(0%)'
        }else if(slide == prev){
            slide.style.transform = 'translateX(-100%)'
        }
        slide.addEventListener('transitionend',function(){
            slide.classList.remove('smooth')
        })
    })
}
function prevToImages(){
    let slideActive = document.querySelector('.slide.active')
    let [prev] = prevSlide();
    prev.classList.add('smooth')
    slideActive.classList.add('smooth')
    slideActive.classList.remove('active')
    slideActive.style.transform = 'translateX(100%)'
    prev.style.transform = 'translateX(0)'
    prev.classList.add('active')
    place2();
}
// prev text slide
function prevSlideText(){
    let Activetext = document.querySelector('.active_text');
    let Currenttext = textArrey.indexOf(Activetext);
    let prevtext ;
   
    if(Activetext == textArrey[0]){
        prevtext = textArrey[textArrey.length - 1]  
      }else{
        prevtext = textArrey[Currenttext - 1]
      }
   return [prevtext]
}
function placeToPrevText(){
    let Activetext = document.querySelector('.text.active_text');
    let Currenttext = textArrey.indexOf(Activetext);
    let [prevtext] = prevSlideText()
    textArrey.map((text,index)=>{
        if(Currenttext == index){
            text.style.top = '-7px'
        }else if(text == prevtext){
            text.style.top = '40px'
        }
        text.addEventListener('transitionend',function(){
            text.classList.remove('smooth_text')
        })
    })
}
function prevToSlidetext(){
    let Activetext = document.querySelector('.text.active_text');
    let [prevText] = prevSlideText();
    prevText.classList.add('smooth_text');
    Activetext.classList.add('smooth_text');
    Activetext.classList.remove('active_text');
    Activetext.style.top = '-76px';
    prevText.style.top = '-7px';
    prevText.classList.add('active_text');
    placeToPrevText();
}
let prevbtn = document.querySelector('.prev')
prevbtn.addEventListener('click',function(){
    prevToImages();
    prevToSlidetext();
})

setInterval(() => {
    slideToImages();
    slideToText();
}, 5000);