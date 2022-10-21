let nav = document.querySelector('#navigation');
let remove = document.querySelector('.popup-close');
let appear = document.querySelector('.popup-con')  
let wrapper = document.querySelector('.wrapper')
let remove2 = document.querySelector('.wrapper-close');
const form = document.querySelector('#form'); 

setTimeout(() => {
    wrapper.style.display = 'block'
}, 2000);
nav.addEventListener('click', e=>{
    e.preventDefault()
    appear.style.display = 'block';
})
remove.addEventListener('click', e=>{
    e.preventDefault()
    appear.style.display = 'none';
})
form.addEventListener('submit', e=>{
    e.preventDefault()
    if(form.email.value == ''){
        wrapper.style.display = 'block';
    }else{
        wrapper.style.display = 'none';
    }    
})
appear.addEventListener('click' , e=>{
    e.preventDefault()
    appear.style.display = 'none';
})
remove2.addEventListener('click', e=>{
    e.preventDefault()
    wrapper.style.display = 'none';
})

