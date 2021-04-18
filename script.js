const btn = document.querySelector('button'); //se le asigna el boton a la const btn
btn.onclick = function(){
    displayMessage('Woo, this is a new message!!!',''); //funcion anonima que llama a la funcion principal (display message) junto con el parametro que necesita para funcionar
}

function displayMessage(msgText,msgType){ //se le agregan parametros de entrada
    const html = document.querySelector('html'); //'Jala' el html

    const panel = document.createElement('div'); //Crea un div
    panel.setAttribute('class','msgBox'); //Le agregue el atributo calss.msgBox
    html.appendChild(panel); //lo Adjunta al html

    const msg = document.createElement('p'); //crea un elemento p
    msg.textContent = msgText; //agrega el atributo text content y el mensaje
    panel.appendChild(msg); //lo agrega al panel por ser el elemento div

    const closeBtn = document.createElement('button'); //Crear un botton
    closeBtn.textContent = 'x'; //agrega el atributo txt content con una x
    panel.appendChild(closeBtn); //lo agrega al objeto btn.

    closeBtn.onclick = function(){
        panel.parentNode.removeChild(panel); //atributo remove child. el panel le dice al html que lo remueva
    }

    if(msgType === 'warning'){
        msg.style.backgroundImage = 'url(images/warning.png)';
        panel.style.backgroundColor= 'red';
    } else if (msgType === 'chat'){
        msg.style.backgroundImage = 'url(images/chat.png)';
        panel.style.backgroundColor= 'aqua';
    } else {
        msg.style.paddingLeft='20px';
    }


}

//displayMessage();