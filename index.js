const button = document.getElementById("countButton");
button.addEventListener("click", function() {    
    const resultadoLetras = document.getElementById('lettersDiv')
    const resultadoPalavras = document.getElementById('wordDiv')
    let txt = document.getElementById('txt').value
    txt = txt.toLowerCase()
    let arrayPalavra = txt.split(' ')
    console.log(arrayPalavra)

    const objPalavra = {};
    for (let i = 0; i < arrayPalavra.length; i++) {
        let pegaPalavra = arrayPalavra[i];
        if (objPalavra[pegaPalavra] === undefined) {
            objPalavra[pegaPalavra] = 1; 
        } else { 
            objPalavra[pegaPalavra]++; 
        }
    }

    for (let palavra in objPalavra) { 
        const span = document.createElement("span"); 
        const textContent = `"${palavra}": ${objPalavra[palavra]}, `;
        span.innerText = textContent; 
        const wordsDiv = document.getElementById("wordsDiv");
        wordsDiv.appendChild(span); 
    }

    txt = txt.replace(/[^a-zA-Zs]/g, "")

    const objLetra = {};
    for (let i = 0; i < txt.length; i++) {
        let pegaLetra = txt[i];
        if (objLetra[pegaLetra] === undefined) {
            objLetra[pegaLetra] = 1; 
        } else { 
            objLetra[pegaLetra]++; 
        }
    }
    for (let letra in objLetra) { 
        const span = document.createElement("span"); 
        const textContent = `"${letra}": ${objLetra[letra]}, `;
        span.innerText = textContent; 
        const lettersDiv = document.getElementById("lettersDiv");
        lettersDiv.appendChild(span); 
    }
});