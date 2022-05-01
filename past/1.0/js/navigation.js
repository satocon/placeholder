const promptLine = document.querySelector('.type');
let input = "Reading file...";

function tabs(page) {
    promptLine.innerHTML = input;
    setTimeout(() => {
        if (page.style.display === 'none') {
            page.style.display = 'grid';
            document.querySelector('#index').style.display = 'none';
            document.querySelector('.back').style.display = 'inline-block';
        } else {
            page.style.display = 'none';
            document.querySelector('#index').style.display = 'grid';
            document.querySelector('.back').style.display = 'none';
        }
    promptLine.innerHTML = '';
    }, 1000);
}

function index() {
    promptLine.innerHTML = input;
    setTimeout(() => {
        if (document.querySelector('#index').style.display === 'none') {
            document.querySelector('#index').style.display = 'grid';
            document.querySelector('#about').style.display = 'none';
            document.querySelector('#extra').style.display = 'none';
            document.querySelector('#contact').style.display = 'none';
            
            document.querySelector('.back').style.display = 'none';
        }
        promptLine.innerHTML = '';
    }, 1000);
}

document.addEventListener('keyup', event => {
    if (document.querySelector('#index').style.display === 'none' && event.key === 'Enter') {
        index();
    }
});
document.querySelector('#index-control').addEventListener('click', event => {
    index();
}); //to index