

const colorwhite = "rgb(222, 228, 250)"
const colorblue = "rgba(10, 56, 113, 1)"
let data = 1;

const encryptContent = () => {
    const decryptVar = document.querySelector(`.btn-decrypt`);
    const encryptVar = document.querySelector(`.btn-encrypt`);
    data = 1;
    encryptVar.style.backgroundColor = colorblue;
    encryptVar.style.color = colorwhite;
    encryptVar.value = "Encriptando..."


    decryptVar.style.backgroundColor = colorwhite;
    decryptVar.style.color = colorblue;
    decryptVar.value = "Desencriptar"

    const comprobation = document.querySelector(`.textToProcessed`);
    if (comprobation.value.length>0) {
        encrypt(comprobation.value);
    }


}

const decryptContent = () => {
    const decryptVar = document.querySelector(`.btn-decrypt`);
    const encryptVar = document.querySelector(`.btn-encrypt`);

    data = 2;


    encryptVar.style.backgroundColor = colorwhite;
    encryptVar.style.color = colorblue;
    encryptVar.value = "Encriptar"

    decryptVar.style.backgroundColor = colorblue;
    decryptVar.style.color = colorwhite;
    decryptVar.value = "Desencriptando..."


    const comprobation = document.querySelector(`.textToProcessed`);
    if (comprobation.value.length>0) {
        decrypt(comprobation.value);
    }

}

const encrypt = (value) => {
    let arraytoEncrypt = value.split(" ");
    const textArea = document.querySelector(`.processedText-textarea`);


    let arrayEncript = arraytoEncrypt.map(word => {

        let aNoWords = word.split("a");

        let aANoWord = aNoWords.map(aNoWord => {

            let eNoWords = aNoWord.split("e");

            let eENoWord = eNoWords.map(eNoWord => {

                let iNoWords = eNoWord.split("i");

                let iINoWord = iNoWords.map(iNoWord => {

                    let oNoWords = iNoWord.split("o");

                    let oONoWord = oNoWords.map(oNoWord => {
                        let uNoWords = oNoWord.split("u");
                        return uNoWords.join("ufat");
                    });
                    return oONoWord.join("ober");
                });
                return iINoWord.join("imes");
            })
            return eENoWord.join("enter");
        })

        return aANoWord.join("ai");
    });

    textArea.value = arrayEncript.join(" ");

}
const decrypt = (value) => {
    let arraytoEncrypt = value.split(" ");
    const textArea = document.querySelector(`.processedText-textarea`);

    let arrayEncript = arraytoEncrypt.map(word => {

        let aNoWords = word.split("ai");

        let aANoWord = aNoWords.map(aNoWord => {

            let eNoWords = aNoWord.split("enter");

            let eENoWord = eNoWords.map(eNoWord => {

                let iNoWords = eNoWord.split("imes");

                let iINoWord = iNoWords.map(iNoWord => {

                    let oNoWords = iNoWord.split("ober");

                    let oONoWord = oNoWords.map(oNoWord => {
                        let uNoWords = oNoWord.split("ufat");
                        return uNoWords.join("u");
                    });
                    return oONoWord.join("o");
                });
                return iINoWord.join("i");
            })
            return eENoWord.join("e");
        })

        return aANoWord.join("a");
    });

    textArea.value = arrayEncript.join(" ");
}



const keyPressEvent = (e) => {

    if (e.keyCode === 32 || e.keyCode === 13) {
        if (data === 1) {
            encryptContent();
        } else {
            decryptContent();
        }
    }

}


const mainFunctional = () => {

    const comprobation = document.querySelector(`.textToProcessed`);
    comprobation.addEventListener('keypress', keyPressEvent);

    const encryptVar = document.querySelector(`.btn-encrypt`);
    const decryptVar = document.querySelector(`.btn-decrypt`);
    encryptVar.addEventListener('click', encryptContent);
    decryptVar.addEventListener('click', decryptContent);

}
mainFunctional();