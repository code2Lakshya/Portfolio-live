const menuOpen=document.querySelector('.nav-btn span:nth-child(3)');
const navList=document.querySelector('.nav-list');
const menuClose=document.querySelector('.nav-list li span')
const listItems=document.querySelectorAll('.nav-list li');
const darkModeBtn=document.getElementsByClassName('dark')[0];
const lightModeBtn=document.getElementsByClassName('light')[0];

menuOpen.addEventListener('click',(e)=>{
    navList.classList.add('active');
    menuClose.classList.add('active');
})
function closeMenuHandler(){
        navList.classList.remove('active');
        menuClose.classList.remove('active');
}
menuClose.addEventListener('click',closeMenuHandler);
listItems.forEach((item)=>{
    item.addEventListener('click',closeMenuHandler);
})
darkModeBtn.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--bg-color','rgb(25,22,39)');
    document.documentElement.style.setProperty('--text-color','white');
    lightModeBtn.classList.add('active');
    darkModeBtn.classList.remove('active');
})
lightModeBtn.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--bg-color','white');
    document.documentElement.style.setProperty('--text-color','#242329');
    lightModeBtn.classList.remove('active');
    darkModeBtn.classList.add('active');
})