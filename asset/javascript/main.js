let St = true
let body=document.body
var menu = {
    init:function(){
        this.show();
    },
    show:function() {
        let linkMn =document.querySelectorAll(".header-top__link")
        var header = document.querySelector(".header");
        var btn= document.querySelector(".header-top__btn");
        var menu=document.querySelector(".header-top__menu");
        btn.addEventListener("click",()=>{
            btn.classList.toggle("acti")
            menu.classList.toggle("show");
            if (St==true) {
                linkMn.forEach(linkMns => {
                    linkMns.style="transition: none;"
                });
                header.classList.add("watch");
                header.classList.add("un-hide")
                body.style="overflow:hidden"
                return St = false
            }
            else{
                linkMn.forEach(linkMns => {
                    linkMns.style="transition: all 0.3s ease-in-out;"
                });
                header.classList.remove("watch");
                header.classList.remove("un-hide")
                body.style="overflow:none"
                return St = true
            }
        })
    }
}
menu.init()


window.onscroll =function(){scrollMenu()};
function scrollMenu(){
    var header = document.querySelector(".header");
    var scrolling = header.getBoundingClientRect().top
    if(scrollY>scrolling+50){
        header.classList.add("bg")
    }
    else{
        header.classList.remove("bg")
    }
}
let bannerHeight = document.querySelector(".about")
var startPoint = window.pageYOffset;
let position = bannerHeight.offsetTop
window.addEventListener("scroll",()=>{
    var scrollPoint = window.pageYOffset;
    var header = document.querySelector(".header");
    if (scrollPoint>position -300) {
        if (scrollPoint > startPoint ) {
            header.classList.add("hide")
            
        } 
        else {
            header.classList.remove("hide")
        }
    }
    startPoint = scrollPoint 
})
let banner=document.querySelector(".banner")
let section = document.querySelectorAll(".section")
let aniActive = ()=>{
    for (let i = 0; i < section.length; i++) {
        let sections = section[i];
        let positions = sections.offsetTop
        if (scrollY>positions-400) {
            sections.classList.add("animation-active")
        }
    }
}
window.addEventListener ("scroll",aniActive)
let addAnimation = ()=>{
    let title=document.querySelector(".banner-item")
    title.classList.add('animation')
    let img = document.querySelector(".banner-img")
    img.classList.add('animation')
}
addAnimation()
let number = document.querySelectorAll(".number")

let couterSection = ()=>{
    height = section[2].offsetTop
    if(scrollY>height - 300){
        let couter =()=>{
            for (let i = 0; i < number.length; i++) {
                let numbers = number[i];
                let last = numbers.getAttribute('data-target')
                let status = parseInt(numbers.innerText)
                let up = 1
                if (status<last) {
                    status = parseInt(status + up)
                    setTimeout(couter,80)
                    numbers.innerHTML = status+""+"%"
                }
            }
        }
        couter ()
    }
}
window.addEventListener("scroll",couterSection)
let trangThai = true
let linkMenu = document.querySelectorAll(".link-menu")
let listLink = document.querySelectorAll(".list-link")
let menuHover = document.querySelectorAll(".menu-hover")
let MHL =document.querySelectorAll(".menu-hover_list")
let menuListAt = ()=>{
    for (let i = 0; i < linkMenu.length; i++) {
        let linkMenus = linkMenu[i];
        linkMenus.addEventListener("click",()=>{
            if(trangThai==true){
                
                linkMenus.classList.add("act")
                menuHover[i].classList.add("add")
                return trangThai =false
            }
            else{
                linkMenus.classList.remove("act")
                menuHover[i].classList.remove("add")
                return trangThai =true
            }
        })
    }
}
menuListAt()
st =true
let linklistAt = () =>{
    for (let i = 0; i < listLink.length; i++) {
        let listLinks = listLink[i];
        listLinks.addEventListener("click",()=>{
            if(st==true){
                
                listLinks.classList.add("act")
                MHL[i].classList.add("add")
                return st =false
            }
            else{
                listLinks.classList.remove("act")
                MHL[i].classList.remove("add")
                return st =true
            }
        })
    }
}
linklistAt()