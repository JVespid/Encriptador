// Apartado de Funciones

//función para insertar html en el cualquier parte de la pagina con solo un clase
const insertHtml = (html, classs) => {
    document.querySelector(`.${classs}`).innerHTML = html;
}

//función para cambiar el tipo de mensaje según la resolución de la pantalla
const changeProcessedNoText = () => {
    const noHTMLGreat = `
    <div class="noContentGreat">
        <div class="noCntent-div-img">
            <img class="noCntent-img" src="img/search.svg" alt="search">
        </div>
        <div class="noContent-div-text">
            <h2 class="noContent-h2">Ningún mensaje fue encontrado</h2>
            <p class="noConten-p">Ingresa el texto que desees encriptar o desencriptar.</p>
        </div>
    </div>
    `;
    const noHTMLShort = `
    <div class="noContentShort">
        <div class="noContent-div-text">
            <h2 class="noContent-h2">Ningún mensaje fue encontrado</h2>
            <p class="noConten-p">Ingresa el texto que desees encriptar o desencriptar.</p>
        </div>
    </div>
    `;
    insertHtml("", "div-erase")


    let width = screen.width;
    if (width >= 1000) insertHtml(noHTMLGreat, `processedText`);
    else insertHtml(noHTMLShort, `processedText`);

}

// función para cambiar entre en textarea para imprimir el texto y el mensaje de 
const processedTextOnChange = () => {
    const dataTextToProcessed = document.querySelector(`.textToProcessed`);
    const yesHTML = `
    <div class="yesContent">
        <textarea class="processedText-textarea" placeholder="Texto procesado" readonly>wa ha ha</textarea>

        <input type="button" class="btn-copy btn btn2" value="copiar"/>
    </div>
    `;
    const noImgHTML = `
    <img src="img/erase.svg" alt="x" class="erase" title="Borrar">
    `;

    if (dataTextToProcessed.value.trim()) {
        insertHtml(yesHTML, `processedText`);
        insertHtml(noImgHTML, "div-erase");
        const copyText = document.querySelector(`.btn-copy`);
        copyText.addEventListener('click', copy);


        const erase = document.querySelector(`.erase`);
        erase.addEventListener('click', eraseClick);
    } else changeProcessedNoText();


}

const copy = () =>{

    const content = document.querySelector('.processedText-textarea');
    content.select();
    document.execCommand('copy');

    const copyText = document.querySelector(`.btn-copy`);
    copyText.value = "Copiado";
    copyText.style.backgroundColor = "rgba(10, 56, 113, 1)";
    copyText.style.color = "rgb(222, 228, 250)";


}

const eraseClick = () => {
    const dataTextToProcessed = document.querySelector(`.textToProcessed`);
    const erase = document.querySelector(`.erase`);
    const copyText = document.querySelector(`.btn-copy`);

    dataTextToProcessed.value = "";
    copyText.removeEventListener('onclick', copy);
    erase.removeEventListener('onclick', eraseClick);
    changeProcessedNoText();
}


//funcion main, aquí se ejecutan todas las funciones de arriba
const main = () => {

    changeProcessedNoText();


    // Apartado de Eventos
    const dataTextToProcessed = document.querySelector(`.textToProcessed`);
    dataTextToProcessed.addEventListener('keyup', processedTextOnChange);

}





main();
