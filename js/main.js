let toggle = false;
let mobileToggle = false
let count = 0;
let menuItem = 'all';
let img = 0;
let time;
const countDom = document.querySelector('.count');
let images = ['home1.png', 'home2.png', 'home3.png', 'home4.png'];
const media = document.querySelector('.media');
const hitems = document.querySelectorAll('.hitems');
let firstClick = true;
let firstClickPrev = true;
let lastNav = 'home'
countDom.children[2].innerText = '0' + images.length
addEventListener('click', (e)=>{
    if(e.target.parentElement.parentElement.className == 'menu'){
        if(e.target.localName == 'li'){
            const menuList = e.target.parentElement.children
            for(let i = 0; i < menuList.length; i++){
                menuList[i].removeAttribute('class')
            }
            e.target.classList.add('active')
            
        }
        else if(e.target.localName == 'a' && e.target.parentElement.localName !='div'){
            const menuList = e.target.parentElement.parentElement.children
            for(let i = 0; i < menuList.length; i++){
                menuList[i].removeAttribute('class')
            }
            e.target.parentElement.classList.add('active')
        }
    }else{
        if(e.target.localName == 'li' && e.target.parentElement.className != 'menu'){
            e.preventDefault();
            const menuList = e.target.parentElement.children
            for(let i = 0; i < menuList.length; i++){
                menuList[i].firstElementChild.removeAttribute('class')
            }
            e.target.firstElementChild.classList.add('active')
        }
        else if(e.target.localName == 'a' && e.target.parentElement.classList[0] !='close' && e.target.parentElement.localName !='div' && e.target.parentElement.parentElement.className != 'menu' && e.target.parentElement.parentElement.parentElement.className != 'mmenu'){
            e.preventDefault();
            const menuList = e.target.parentElement.parentElement.children;
            menuItem = e.target.dataset['slide'];
            for(let i = 0; i < menuList.length; i++){
                menuList[i].firstElementChild.removeAttribute('class')
            }
            e.target.parentElement.firstElementChild.classList.add('active')
            let portfolio = document.querySelector('.portfolio').children[2].children
            let number = (document.querySelectorAll('.'+menuItem).length >0)?document.querySelectorAll('.'+menuItem).length:12;
            let count = 0;
            for(let i = 0; i < portfolio.length; i++){
                portfolio[i].classList
                .remove('item2','item1','item3','item4','p-1','p-2','p-3','p-4','p-5','p-6','p-7','p-8','p-9','p-10','p-11','p-12')
                let items = portfolio[i].className.split(' ').filter((e)=>e == menuItem)
                if(items[0] != menuItem)
                portfolio[i].style.display = 'none';
                else
                {
                    ++count;
                    portfolio[i].style.display = 'block';
                    
                    if(number > 4 && count == 2){
                        portfolio[i].classList.add('item2')
                    }else if(number > 7 && count == 5){
                        portfolio[i].classList.add('item1')
                    }else if(number > 8 && count == 6){
                        portfolio[i].classList.add('item3')
                    }else if(number == 12 && count == 12){
                        portfolio[i].classList.add('item4')
                    }  
                    portfolio[i].classList.add('p-'+count)        
                }      
                
            }
        
        }
    }
})


function next(){
    document.querySelector('#next').addEventListener('click', (e)=>{
        let portfolio = (menuItem !== 'all') ? document.querySelectorAll('.'+menuItem) : document.querySelector('.portfolio').children[2].children;
        if(img < portfolio.length-1)
        ++img;
        media.firstElementChild.children[1].style.backgroundImage = portfolio[img].style.backgroundImage;
    })
}

function prev(){
    document.querySelector('#prev').addEventListener('click', (e)=>{
        let portfolio = (menuItem !== 'all')? document.querySelectorAll('.'+menuItem): document.querySelector('.portfolio').children[2].children;
        if(img > 0)
        --img;
        media.firstElementChild.children[1].style.backgroundImage = portfolio[img].style.backgroundImage;
    })
}
prev();
next();
document.querySelector('.hambuger').addEventListener('click', (e)=>{
    if(toggle){
        document.querySelector('.menu').style.transform = 'translateY(0)';
        toggle = false;
    }
    else{
        document.querySelector('.menu').style.transform = 'translateY(-250%)';
        toggle = true;
    }
})

// document.querySelector('body').addEventListener('click', (e)=>{
//     if(toggle){
//         console.log(e)
//         console.log(toggle)
//         document.querySelector('.mmenu').style.transform = 'translateX(-100%)';
//         toggle =false;
//     }
    
// })
document.querySelector('.mobile-menu').addEventListener('click', (e)=>{
    if(toggle){
        document.querySelector('.mmenu').style.transform = 'translateX(150%)';
        document.querySelector('.cross').style.display ='none'
        document.querySelector('.open').style.display ='grid'
        toggle = false;
    }
    else{
        document.querySelector('.mmenu').style.transform = 'translateX(50%)';
        document.querySelector('.open').style.display ='none';
        document.querySelector('.cross').style.display ='flex'
        toggle = true;
    }
})
// document.querySelector('body').addEventListener('click', (e)=>{
//     if(toggle){
//         document.querySelector('.mmenu').style.transform = 'translateX(150%)';
//         document.querySelector('.cross').style.display ='none'
//         document.querySelector('.open').style.display ='grid'
//         toggle = false;
//     }
// })
document.querySelector('.prev').addEventListener('click', (e)=>{
        if(count <= 0)
        count = hitems.length;

        for(let i = 0; i < hitems.length; i++){
            hitems[i].classList.remove('slider')
            // hitems[i].style.display = 'none';
            // hitems[i].style.transform = 'translateY(0)';
            // hitems[count - 1].style.transform = 'translateY(-100%)'
            // hitems[count + 1].style.transform = 'translateY(100%)';
        }
        
        // --count;
        // countDom.firstElementChild.innerText = '0'+ (count + 1);
        // document.querySelector('.slide-'+count).classList.add('slider')
        if(firstClickPrev || (!firstClickPrev && !firstClick)){
            --count;
            --count;
            if(count < 1)
            count = hitems.length -1
            firstClickPrev = false
            firstClick = true;
            document.querySelector('.slide-'+count).classList.add('slider')
            countDom.firstElementChild.innerText = '0'+ (count + 1);
        }else{
                
                --count;
                document.querySelector('.slide-'+count).classList.add('slider')
                
                countDom.firstElementChild.innerText = '0'+ (count + 1) ;
            }
})
document.querySelector('.next').addEventListener('mouseenter',(e)=>{
    clearInterval(time)

})
document.querySelector('.prev').addEventListener('mouseenter',(e)=>{
    clearInterval(time)

})
document.querySelector('.next').addEventListener('mouseout',(e)=>{
    slider()

})
document.querySelector('.prev').addEventListener('mouseout',(e)=>{
    slider()

})
document.querySelector('.next').addEventListener('click', (e)=>{
    if(count >= hitems.length)
        count = 0;
   
    for(let i = 0; i < hitems.length; i++){
        hitems[i].classList.remove('slider')
        // hitems[i].style.transform = 'translateY(0)';
        // hitems[count - 1].style.transform = 'translateY(-100%)'
        // hitems[count + 1].style.transform = 'translateY(100%)';
    }
    if(count < hitems.length){
        
        if(firstClick || (!firstClickPrev && !firstClick)){
            ++count;
            firstClick = false
            firstClickPrev = true
            if(count >= hitems.length)
            count = 0;
            document.querySelector('.slide-'+count).classList.add('slider')
            countDom.firstElementChild.innerText = '0'+ (count + 1);
            ++count;
        }else{
            document.querySelector('.slide-'+count).classList.add('slider')
            ++count;
            countDom.firstElementChild.innerText = '0'+ count ;
        }
        

           
    }

})
function slider(){
    time = setInterval(()=>{
        if(count >= hitems.length)
            count =0;
       
        for(let i = 0; i < hitems.length; i++){
            hitems[i].classList.remove('slider')
        }
        if(count < hitems.length){
            countDom.firstElementChild.innerText = '0'+ (count + 1);
                document.querySelector('.slide-'+count).classList.add('slider')
        }
    
        ++count;
    },5000)
}
addEventListener('load', (e)=>{
    
        slider()
})
addEventListener('click', (e)=>{
    if(e.target.parentElement.classList[0] == 'close'){
        e.preventDefault();
        media.classList.remove('display')
        media.classList.add('no-display')
    }
})
addEventListener('click', (e)=>{
    if(e.target.parentElement.parentElement.className.split(' ')[0] == 'portfolio' && e.target.className.split(' ')[0] == 'col')
    {
        img = e.target.classList[e.target.classList.length -1].split('-')[1] -1;
        media.firstElementChild.children[1].style.backgroundImage = e.target.style.backgroundImage;
        media.firstElementChild.nextElementSibling.style.display = 'none';
        media.firstElementChild.style.display = 'grid';
        media.classList.remove('no-display')
        media.classList.add('display')
    }
})
document.querySelector('.play').addEventListener('click', (e)=>{
    media.firstElementChild.style.display = 'none';
        media.firstElementChild.nextElementSibling.style.display = 'grid';
        media.classList.remove('no-display')
        media.classList.add('display')
})

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    if(bounding.top > ((window.innerHeight)*-1)*0.89)
    return true;
};
function elementInViewPort(elem) {
    var rect = elem.getBoundingClientRect();
    var ch = window.innerHeight >=  rect.bottom*0.63 && rect.top >= ((window.innerHeight)*-1)*0.1 
    return ch 
};
function navColor(){
    var elements = (document.querySelector('.menu') != null)?document.querySelector('.menu').children: document.querySelector('.mmenu').firstElementChild.children;
    for(var i = 0; i < elements.length; i++){
    var nav = elements[i].firstElementChild.getAttribute('href').split('#')[1];
        elements[i].classList.remove('active')
        var element = document.getElementById(nav);
        if(element != null && elementInViewPort(element)){
            lastNav = nav
            document.querySelector('[href="#'+nav+'"]').parentElement.classList.add('active')
        }else{
            document.querySelector('[href="#'+lastNav+'"]').parentElement.classList.add('active')
        }
        
        
     }
}
window.onscroll = (e)=>{
    navColor()
    if(!isInViewport(document.querySelector('.home'))){
        document.querySelector('.inner-header').style.background = 'rgba(0,0,0,0.7)';
    }else{
     document.querySelector('.inner-header').style.background = 'transparent';
    }
}