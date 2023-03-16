
function alterarConteudo() {
    let htmlElement = document.getElementById('bloco-esquerdo');

    htmlElement.innerHTML = "<div class='alert alert-danger'> Zé mané </div>";
    htmlElement.classList.remove('bg-danger');
}

function onHoverElement(e) {
    e.classList.add('bg-success');
}

function showImage(e) {
    e.innerHTML = "<img id='myImage' class='img w-100' src='img/image.jpg'></img>";
}