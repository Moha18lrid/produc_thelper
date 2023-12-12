let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains1 = document.getElementById('mountains1');
let mountains2 = document.getElementById('mountains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.name');
window.onscroll = function () {
    let value = scrollY;
    stars.style.right = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains1.style.top = value * 2 + 'px';
    mountains2.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    boat.style.top = value + 'px';
    nouvil.style.fontSize = value  + 'px';
    if(scrollY>= 93 ){
        nouvil.style.fontSize = 93  + 'px';
        nouvil.style.position ='fixed';
    }
    if(scrollY>=40){
        document.querySelector('.main').style.background='linear-gradient(rgb(0 104 142), rgb(56, 0, 117))'
    
    if(scrollY>=108){
        document.querySelector('.main').style.background='linear-gradient(rgb(0 186 187), rgb(56, 0, 117))'
    }
}
    else{
        document.querySelector('.main').style.background='  linear-gradient(rgb(0, 0, 59), rgb(56, 0, 117))'
  
      
    }
}

