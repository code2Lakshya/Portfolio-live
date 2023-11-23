const getElement = (querry) => {
    return document.querySelectorAll(querry);
}
const menuOpen = document.querySelector('.nav-btn span:nth-child(3)');
const navList = document.querySelector('.nav-list');
const menuClose = document.querySelector('.nav-list li span')
const listItems = getElement('.nav-list li');
const darkModeBtn = document.getElementsByClassName('dark')[0];
const lightModeBtn = document.getElementsByClassName('light')[0];
const dropdown = getElement('.dropdown-heading');
const dropdownList = getElement('.dropdown-list');
const dropBtn = getElement('.btn');
const educationList = getElement('.item1');
const scoreList = getElement('.item2');
const qualificationBtn = getElement('.button');
let currentTab = qualificationBtn[0];
currentTab.classList.add('active');
educationList.forEach(item => item.classList.add('active'));
const card = getElement('.project-card');
const left = getElement('.fa-chevron-left')[0];
const right = getElement('.fa-chevron-right')[0];
let c=0;
const slideBtn=getElement('.project-footer span');
const scroller=getElement('.scroller')[0];

qualificationBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (currentTab !== item) {
            currentTab.classList.remove('active');
            if (currentTab.classList.contains('education')) {
                scoreList.forEach((item) => {
                    item.classList.add('active');
                })
                educationList.forEach((item) => {
                    item.classList.remove('active');
                })
                currentTab = qualificationBtn[1];
            }
            else {
                educationList.forEach((item) => {
                    item.classList.add('active');
                })
                scoreList.forEach((item) => {
                    item.classList.remove('active');
                })
                currentTab = qualificationBtn[0];
            }
            currentTab.classList.add('active');
        }
    })
})
menuOpen.addEventListener('click', (e) => {
    navList.classList.add('active');
    menuClose.classList.add('active');
})
function closeMenuHandler() {
    navList.classList.remove('active');
    menuClose.classList.remove('active');
}
menuClose.addEventListener('click', closeMenuHandler);
listItems.forEach((item) => {
    item.addEventListener('click', closeMenuHandler);
})
darkModeBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--bg-color', 'rgb(25,22,39)');
    document.documentElement.style.setProperty('--text-color', 'white');
    document.documentElement.style.setProperty('--form-bg-color', '#211D35');
    document.documentElement.style.setProperty('--footer-bg-color', '#6E57E0');
    lightModeBtn.classList.add('active');
    darkModeBtn.classList.remove('active');
})
lightModeBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--bg-color', 'white');
    document.documentElement.style.setProperty('--text-color', '#242329');
    document.documentElement.style.setProperty('--form-bg-color', '#F0EEFC');
    document.documentElement.style.setProperty('--footer-bg-color', 'white');
    lightModeBtn.classList.remove('active');
    darkModeBtn.classList.add('active');
})
dropdown.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (item.classList.contains('language-btn')) {
            dropdownList[0].classList.toggle('active');
            dropBtn[0].classList.toggle('active');
        }
        else if (item.classList.contains('libraries-btn')) {
            dropdownList[1].classList.toggle('active');
            dropBtn[1].classList.toggle('active');
        }
        else {
            dropdownList[2].classList.toggle('active');
            dropBtn[2].classList.toggle('active');
        }
    });
})
const leftSlide=() => {
    if(c>0){
            card.forEach(item => {
                item.style.transform = `translateX(-${c-1}00%)`;
            })
            slideBtn[c].classList.remove('active');
            c--;
            slideBtn[c].classList.add('active');
        }
        else{
            card.forEach(item => {
                item.style.transform = `translateX(-300%)`;
            })
            slideBtn[c].classList.remove('active');
            c=3;
            slideBtn[c].classList.add('active');
        }
};
left.addEventListener('click', leftSlide);
const rightSlide=() => {
    if(c<3){
        card.forEach(item => {
            item.style.transform = `translateX(-${c+1}00%)`;
        })
        slideBtn[c].classList.remove('active');
            c++;
            slideBtn[c].classList.add('active');
    }
    else{
        card.forEach(item => {
            item.style.transform = `translateX(0)`;
        })
        slideBtn[c].classList.remove('active');
        c=0;
        slideBtn[c].classList.add('active');
    }
};
right.addEventListener('click', rightSlide);
slideBtn.forEach(item=>{
    item.addEventListener('click',(e)=>{
        const current=e.target.getAttribute('data-num');
        if(current!==c){
            card.forEach(element=>{
                element.style.transform=`translateX(-${current}00%)`;
            })
            slideBtn[c].classList.remove('active');
            c=current;
            slideBtn[c].classList.add('active');
        }
    })
})
setInterval(rightSlide,7000);

window.addEventListener('scroll',()=>{
    window.scrollY>540 ? scroller.classList.add('active'): scroller.classList.remove('active');
})
scroller.addEventListener('click',()=>{
    window.scrollTo(0,0);
})