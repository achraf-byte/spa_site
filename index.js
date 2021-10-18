document.getElementById('openmobnave').addEventListener('click'  , ()=>{
    document.getElementById('navitemsmobile').classList.add('open')
})
document.getElementById('closenmobnave').addEventListener('click'  , ()=>{
    document.getElementById('navitemsmobile').classList.remove('open')
})
var lastScroll = 0
addEventListener('scroll' , (e) => { 
   
    
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;    if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
        document.getElementsByClassName('nav')[0].classList.add('navoff')
        document.getElementsByClassName('navmobile')[0].classList.add('navoff')
        document.getElementsByClassName('navitemsmobile')[0].classList.add('navoff')
    }else{
        lastScroll = currentScroll;
        document.getElementsByClassName('nav')[0].classList.remove('navoff')
        document.getElementsByClassName('navmobile')[0].classList.remove('navoff')
        document.getElementsByClassName('navitemsmobile')[0].classList.remove('navoff')
    }
    
    
})

