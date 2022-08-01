let currImg = document.querySelector('img');
currImg.onclick = function () {
    let currSrc = currImg.getAttribute('src');
    switch (currSrc) {
        case 'images/pic01.jpg':
            currImg.setAttribute('src','images/pic02.jpg');
            break;
        case 'images/pic02.jpg':
            currImg.setAttribute('src','images/pic03.jpg');
            break;
        case 'images/pic03.jpg':
            currImg.setAttribute('src','images/pic04.jpg');
            break;
        case 'images/pic04.jpg':
            currImg.setAttribute('src','images/pic05.jpg');
            break;
        case 'images/pic05.jpg':
            currImg.setAttribute('src','images/pic06.jpg');
            break;
        case 'images/pic06.jpg':
            currImg.setAttribute('src','images/pic07.jpg');
            break;
        default:
            currImg.setAttribute('src','images/pic01.jpg');
            break;
    }
}
