# Flex Panel Gallery

**AUTOR: Mercedes Carballal**

![imgFlexPanels1](./infoReadme/imgFlexPanels1.PNG)

Este proyecto consiste en realizar unos paneles flexibles, utilizando HTML, CSS y JavaScript, que al clickar sobre ellos se expanden y descubren un mensaje secreto.

<br >

## Muestra

![gifFlexPanels](./infoReadme/gifFlexPanels.gif)

## Resolución

Todos los paneles tienen una clase que se llama **_panel_**.
Los selecciono todos `const panels = document.querySelectorAll('.panel');`
Creo una función en la que al hacer click sobre un panel se añada la clase **_open_** y cuando vuelva a hacer click se quite, y con CSS le doy las propiedades para que el panel y la fuente se haga mas grande:

JS

```js
function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
```

De la misma forma utilizo otro **_toggle_** para la parte en la que al hacer click aparezcan los otros textos añadidos.
En este caso uso el parametro **_event_** en el que le indico a la función que cuando la **_propiedad nombre_** del panel que hemos clickado incluya la palabra **_flex_** añada/quite la clase **_open-active_**.
Posteriormente con CSS le indico las transiciones y transformaciones a mi gusto.

```js
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
```

## Estructura

Este proyecto está realizado con JavaScript.

---

ℹ️ Este proyecto está basado en un reto de Wes Bos' [JavaScript 30](https://javascript30.com/).
