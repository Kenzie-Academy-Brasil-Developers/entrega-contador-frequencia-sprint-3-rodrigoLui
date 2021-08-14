
 const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
    
    const resultadoLetras = document.getElementById('lettersDiv')
    const resultadoPalavras = document.getElementById('wordDiv')
    let txt = document.getElementById('txt').value
    txt = txt.toLowerCase()
    txt = txt.normalize("NFD").replace(/[^a-zA-Zs]/g, "")
    const objLetra = {};
    for (let i = 0; i < txt.length; i++) {
        let pegaLetra = txt[i];
        // faça algo com cada letra 

        

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


    console.log(txt)
});