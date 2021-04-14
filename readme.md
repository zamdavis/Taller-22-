# Taller de JavaScript: Funciones

![Resultado](/images/result.png)

Autor: Eduardo Oviedo Blanco

Para usar este taller efectivamente, clone el código en su ambiente local.
```
git clone https://github.com/edWAR6/JS-Functions-Workshop.git
```
Si desea subir el taller en su repositorio personal.
Cree un repositorio en su perfil, luego:
```
git remote set-url origin https://github.com/<tu usuario>/JS-Functions-Workshop.git
```

> El nombre del repositorio puede cambiar. Siga las instrucciones y guarde sus cambios.

## Propósito

Este taller muestra, de manera básica, la creación de funciones, funciones anónimas y el uso de parámetros.

## Instrucciones

1. Inicie creando la primer función, llamada displayMessage.
```javascript
function displayMessage() {

}
```
2. Dentro de la función anterior, defina e inicialice las constantes con los elementos HTML.
```javascript
const html = document.querySelector('html');

const panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = 'This is a message box';
panel.appendChild(msg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);
```
3. Dentro de la misma función, cree una función anónima y asígnela al evento *onclick* del botón.
```javascript
closeBtn.onclick = function() {
  panel.parentNode.removeChild(panel);
}
```
4. Para probar nuestra función, agregue el siguiente llamado a la función temporalmente al final del archivo.
```javascript
displayMessage();
```
5. Ejecute la aplicación y analice el resultado.
6. Comente o borre el llamado a la función que creó al final.
7. Al inicio del archivo, agregue una declaración de un botón que corresponderá al botón en el HTML.
```javascript
const btn = document.querySelector('button');
```
8. Bajo la nueva constante, asigne la función al evento *onclick* del botón.
```javascript
btn.onclick = displayMessage;
```
9. Observe el avance hasta ahora.
10. Para hacer más dinámico el ejemplo, agregue parámetros a la función.
```javascript
function displayMessage(msgText, msgType) {
  ...
```
11. Para poder usar el primer parámetro, cambie la instrucción que asigna la propiedad *textContent* del *msg*.
```javascript
msg.textContent = msgText;
```
12. Ahora asegúrese de enviar el primer parámetro, para esto en lugar de asignar la función directamente al evento *onclick*, será necesario crear una función anónima.
```
btn.onclick = function() {
  displayMessage('Woo, this is a different message!');
};
```
13. Observe el avance hasta ahora.
14. Para hacer funcionar el segundo parámetro, cambia el CSS correspondiente al ancho de la clase *.msgBox*.
```css
width: 242px;
```
15. Agregue las siguientes instrucciones a la clase *.msgBox p*.
```css
padding-left: 82px;
background-position: 25px center;
background-repeat: no-repeat;
```
16. Ahora, agregue las siguientes instrucciones al final de la función *displayMessage*.
```javascript
if (msgType === 'warning') {
  msg.style.backgroundImage = 'url(images/warning.png)';
  panel.style.backgroundColor = 'red';
} else if (msgType === 'chat') {
  msg.style.backgroundImage = 'url(images/chat.png)';
  panel.style.backgroundColor = 'aqua';
} else {
  msg.style.paddingLeft = '20px';
}
```
17. Finalmente, en el evento click del botón, cambie el llamado a la función por alguna de las siguientes líneas. Puede dejar cualquiera de las dos comentadas.
```javascript
displayMessage('Your inbox is almost full — delete some mails', 'warning');
// displayMessage('Brian: Hi there, how are you today?','chat');
```

## Conclusión

Es importante entender la diferencia entre una función y una función anónima. Además de darse cuenta que pueden existir dentro de otras funciones.
Los parámetros son por defecto opcionales y pueden simplemente no usarse.
Las funciones nos permiten tenér código reusable y el úso de parámetros nos permite tener funciones configurables.
