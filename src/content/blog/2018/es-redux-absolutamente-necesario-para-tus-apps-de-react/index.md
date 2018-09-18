---
title: "¿Es Redux Absolutamente Necesario Para Tus Apps de React? 🤔"
date: "2018-09-04"
section: blog
cover_image: "./Adding-testing-linting-docs-to-your-design-system-1920px.jpg"
tags: [ 'testing', 'eslint', 'prettier', 'documentation', 'design', 'design system', 'react', 'open source', 'javascript', 'tutorial' ]
---

Después te aprender a manejar React, es completamente normal -quizás hasta predecible- que vas a comenzar a leer acerca de Redux. Después de un vistazo a su documentación, es probable que salgas con mas preguntas que respuestas, pero es difícil culparte. Según la página oficial, podríamos usar la siguiente definición:

Redux is a predictable state container for JavaScript apps

####Hmmm???

Al saber React, seguramente estarás familiarizado con el concepto de *state*, pero el resto de esas palabras parecen no pertenecer a una misma oración coherente. Bueno, al menos al principio. Afortunadamente, el siguiente párrafo contiene información un poco más clara:

It helps you write applications that behave consistently

Ahhhh, bueno.

Si revisas la documentación de Redux un poco mas a fondo, vas a ver esta frase una y otra vez:

A single source of truth.

Al estar los componentes tan fragmentados -y esto es apropósito- es muy fácil que el comunicar el state entre ellos se vuelva una tarea innecesariamente complicada. En otras palabras, Redux nos puede ayudar a mejorar y optimizar la comunicación del state entre nuestros componentes al ser la única fuente de state y sus mutaciones. Una fuente única de verdad.

Y no hace falta ir muy lejos para ver que Redux es un absoluto monstruo del mundo de web development y ciertamente dentro del ecosistema de React. Tan es así el caso, que mas del 60% de las apps de React en producción utilizan Redux. ¡Eso es muchísimo! 

La cifra anterior es de acuerdo a Mark Ericsson, quien es uno de los mantenedores de Redux. La figura anterior se vuelve incluso más impresionante al notar que no se están tomando en cuenta alternativas a Redux como lo son la popular MobX.

Soy de la opinión que manejar el state de tu app (incluso si no es de React) con una librería como Redux es inteligente, ya que, de entrada, provee un sistema bastante explicito para manejar el state de tus apps, eso sin tomar en cuenta lo bien que tus apps irán escalando y lo organizado de tu código al usar Redux exclusivamente.

###En conclusión... 

¿Es Redux absolutamente necesario para tus apps de React? No, pero usarlo termina casi siempre siendo una muy buena idea. Al principio es probable -tal vez hasta preferible- que puedas manejar todo con setState(), pero si tu app es de tamaño medio a grande, vas a llegar a la conclusión de que utilizar Redux es una buena inversión de tu tiempo.


***


**Referencias**

* [Setting up React with Webpack 4](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75)
* [Creating wrappers for React-Styleguidist](https://react-styleguidist.js.org/docs/thirdparties.html#redux)