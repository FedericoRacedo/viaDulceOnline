/// Creamos el menu resposive
let loadMoreBtn = document.querySelector('#loadMore');
let currentItem =8;

loadMoreBtn.onclick = ()=> {
    let boxes = [...document.querySelectorAll('.boxContainer .box')];
    for (var i = currentItem; i < currentItem + 8 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem += 20;
    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none'
    }
} // Creamos el menu resposive

