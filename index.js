const menuOpen=document.querySelector('.nav-btn span:nth-child(3)');
const navList=document.querySelector('.nav-list');
const menuClose=document.querySelector('.nav-list li span')
const listItems=document.querySelectorAll('.nav-list li');
const darkModeBtn=document.getElementsByClassName('dark')[0];
const lightModeBtn=document.getElementsByClassName('light')[0];
const dropdown=document.querySelectorAll('.dropdown-heading');
const dropdownList=document.querySelectorAll('.dropdown-list');
const dropBtn=document.querySelectorAll('.btn');

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
    document.documentElement.style.setProperty('--sub-text-color','white');
    lightModeBtn.classList.add('active');
    darkModeBtn.classList.remove('active');
})
lightModeBtn.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--bg-color','white');
    document.documentElement.style.setProperty('--text-color','#242329');
    document.documentElement.style.setProperty('--sub-text-color','#919095');
    lightModeBtn.classList.remove('active');
    darkModeBtn.classList.add('active');
})
dropdown.forEach((item)=>{
    item.addEventListener('click',(e)=>{
       if(item.classList.contains('language-btn')){
        dropdownList[0].classList.toggle('active');
        dropBtn[0].classList.toggle('active');
       }
       else if(item.classList.contains('libraries-btn')){
        dropdownList[1].classList.toggle('active');
        dropBtn[1].classList.toggle('active');
       }
       else{
        dropdownList[2].classList.toggle('active');
        dropBtn[2].classList.toggle('active');
       }
    });
})