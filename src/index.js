import './less/index.less'

const title = document.querySelector('.logo-heading')
const blogLink = document.querySelectorAll('.nav-link')[2]
const heroImg = document.querySelector('img')
console.log({title,blogLink,heroImg})

//1: add 'tada' animation to Fun Bus title. 
//uses animate.css via a CDN link

title.addEventListener('mouseover',()=>{
    title.classList.add('animate__animated')
    title.classList.add('animate__tada')
})

//2: Remove animation class from title when animation is done
title.addEventListener('animationend',()=>{
    title.classList.remove('animate__tada')
})

//3: redirect when click on blog nav link.

blogLink.addEventListener('click',(event)=>{
    event.preventDefault();
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
})

//4: create carousel of hero image

let heroImgIndex = 1;
heroImg.addEventListener('wheel',(event)=>{
    event.preventDefault()
    heroImgIndex = (parseInt(heroImgIndex)+1)%4;
    const imgSrc = 'http://localhost:9000/img/fun-bus-'+heroImgIndex+".png";
    heroImg.setAttribute('src',imgSrc)
})

//5: add secret password to site
const password = 'funbus'
let nextLetterIndex = 0;
let nextLetterInPassword = password[nextLetterIndex]
document.addEventListener('keydown',(event)=>{
    const isFinalCharacter = event.key===nextLetterInPassword && nextLetterIndex===password.length-1;
    const isNextLetter = event.key ===nextLetterInPassword;
    
    if(isFinalCharacter){
        window.alert('You found the secret password. You win $1000 and a free trip on the Fun Bus!')
        nextLetterIndex = 0;
    }else if(isNextLetter){
        nextLetterIndex++
    }else{
        nextLetterIndex = 0;
    }
    nextLetterInPassword = password[nextLetterIndex]
})

//6: give alert when mouse enters copyright zone
const footer = document.querySelector('.footer')
footer.addEventListener('mouseenter',()=>{
    window.alert("Don't you dare steal our ideas"
    )
})

//7: Add message when resizing
window.addEventListener('resize',()=>{
    title.textContent = 'Fun Bus Resizing!'
})

//8: Sends welcome message whenever page is shown. 
window.addEventListener('load',()=>{
    window.alert('Welcome to the fun bus!')
})

//9: flash webpage while scrolling
window.addEventListener('scroll',()=>{
    document.body.classList.add('animate__animated')
    document.body.classList.add('animate__flash')
})

document.body.addEventListener('animationend',()=>{
    document.body.classList.remove('animate__flash')
})

//10: Add copywrite warnings when somebody tries to copy an image
const paragraphs = document.querySelectorAll('p')
Array.from(paragraphs);

for(let p of paragraphs){
    p.addEventListener('copy',()=>{
        window.alert('This content is copyrighted and cant be copied.')
     })
}



// Your code goes here!
