// let responseDiv = document.createElement('div');

document.getElementById('criptografar').addEventListener('click', function() {
    
    let contentInput = document.getElementById('content-text').value; 
    const encryptedContent = contentInput
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
        .replace(/ç/g, "plus")
        .replace(/1/g, "xyz")
        .replace(/2/g, "gsd")
        .replace(/3/g, "jhf")
        .replace(/4/g, "bge")
        .replace(/5/g, "dfr")
        .replace(/6/g, "fsd")
        .replace(/7/g, "sdf")
        .replace(/8/g, "ioi")
        .replace(/9/g, "fsd")      

    document.getElementById('msg-main').innerHTML = 
        `<p class='res-text'>${encryptedContent}</p> 
        <div class='copy'>
            <button class='copy-btn' id='copy'>Copiar </button> 
        </div>
        `;
    let responseContainer = document.getElementById('msg-main')
    responseContainer.appendChild(responseDiv)
});

document.getElementById('descriptografar').addEventListener('click', function() {
    
    let contentInput = document.getElementById('content-text').value; 
    const decryptedContent = contentInput
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
        .replace(/plus/g, "ç")
        .replace(/xyz/g, "1")
        .replace(/gsd/g, "2")
        .replace(/jhf/g, "3")
        .replace(/bge/g, "4")
        .replace(/dfr/g, "5")
        .replace(/fsd/g, "6")
        .replace(/sdf/g, "7")
        .replace(/ioi/g, "8")
        .replace(/fsd/g, "9")

    document.getElementById('msg-main').innerHTML = decryptedContent;
    let responseContainer = document.getElementById('msg-main')
    responseContainer.appendChild(responseDiv)
});
