function teste(msg) {
    console.log(msg)
}

let responseDiv = document.createElement('div');

document.getElementById('criptografar').addEventListener('click', function() {
    
    let contentInput = document.getElementById('content-text').value; 
    
    console.log(contentInput);
    
    const keys = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat',
        '0': 'sTkP',
        '1': 'qRjL',
        '2': 'pWgH',
        '3': 'kUyZ',
        '4': 'aXnO',
        '5': 'vIcF',
        '6': 'rNzE',
        '7': 'lMxQ',
        '8': 'bGhJ',
        '9': 'dYtA',
    }

    const encryptedContent = contentInput.split('').map(character => keys[character] || character).join('');

    responseDiv.innerHTML = encryptedContent;
    let responseContainer = document.getElementById('msg-main')
    responseContainer.appendChild(responseDiv)
});



