function teste(msg) {
    console.log(msg)
}

let responseDiv = document.createElement('div');

document.getElementById('criptografar').addEventListener('click', function() {
    
    let contentInput = document.getElementById('content-text').value; 
    
    console.log(contentInput);
    
    responseDiv.innerHTML = contentInput;
    let responseContainer = document.getElementById('msg-main')
    responseContainer.appendChild(responseDiv)
});



