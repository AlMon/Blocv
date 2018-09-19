---
title: "¿Es Redux Absolutamente Necesario Para Tus Apps de React? 🤔"
date: "2018-09-17"
section: blog
cover_image: "./es-redux-absolutamente-necesario-para-tus-apps-de-react.jpg"
tags: [ 'React', 'Redux', 'Español', 'Trends', 'Javascript', 'Context API' ]
---

Después te aprender a operar <span class="react">**React**</span>, es completamente normal -quizás hasta predecible- que vas a comenzar a leer acerca de <span class="redux">**Redux**</span>, y que, como consecuencia, luego de echar un vistazo a todo lo relativo a esta biblioteca de código abierto, probablemente tengas más dudas que certezas. No te culpo, es algo completamente habitual. 

Déjame ayudarte a esclarecer un poco tus dudas; según la página oficial, podríamos usar la siguiente definición:

<p style="text-align: center; font-weight: 700;"><img src="./redux-definicion-1.png" alt="Redux definición 1" /> Hmm??? </p>

¿Complicado?, no tanto. Déjame explicarte.

Al saber <span class="react">**React**</span>, seguramente estarás familiarizado con el concepto de *state*, pero el resto de esas palabras parecen no pertenecer a una misma oración coherente. Bueno, al menos al principio. Afortunadamente, el siguiente párrafo contiene información un poco más clara:

<p style="text-align: center; font-weight: 700;"><img src="./redux-definicion-2.png" alt="Redux definición 2" /> Ahhhh, bueno</p>

Si revisas la documentación de <span class="redux">**Redux**</span> un poco mas a fondo, vas a ver esta frase una y otra vez:

><span class="redux">**Redux**</span> será la fuente de verdad para tus datos

Al estar los componentes tan fragmentados -y esto es apropósito- es muy fácil que el comunicar el state entre ellos se vuelva una tarea innecesariamente complicada. En otras palabras, <span class="redux">**Redux**</span> nos puede ayudar a mejorar y optimizar la comunicación del state entre nuestros componentes al ser la única fuente de state y sus mutaciones. Una fuente única de verdad.

Y no hace falta argumentar demasiado para ver y saber que <span class="redux">**Redux**</span> es un absoluto monstruo del mundo de web development y ciertamente dentro del ecosistema de <span class="react">**React**</span>. Tan es así el caso, que mas del 60% de las apps de <span class="react">**React**</span> en producción utilizan <span class="redux">**Redux**</span>. ¡Eso es muchísimo! 

La cifra anterior es de acuerdo a Mark Ericsson, quien es uno de los mantenedores de <span class="redux">**Redux**</span>. La figura anterior se vuelve incluso más impresionante al notar que no se están tomando en cuenta alternativas a <span class="redux">**Redux**</span> como lo son la popular MobX.

En cuanto a mi opinión, soy de los que piensan que manejar el state de tu app (incluso si no es de <span class="react">**React**</span>) con una librería como <span class="redux">**Redux**</span> es inteligente, porque provee un sistema bastante explicito para manejar el state de tus apps, eso sin tomar en cuenta lo bien que tus apps irán escalando y lo organizado de tu código al usar <span class="redux">**Redux**</span> exclusivamente.

###En conclusión... 

¿Es <span class="redux">**Redux**</span> absolutamente necesario para tus apps de <span class="react">**React**</span>? No, pero usarlo termina casi siempre siendo una muy buena idea. Al principio es probable -tal vez hasta preferible- que puedas manejar todo con *setState()*, pero si tu app es de tamaño mediano a grande, vas a llegar a la conclusión de que utilizar <span class="redux">**Redux**</span> es una buena inversión de tu tiempo.

Debo de mencionar el hecho de que hay susurros de que la nueva *Context API* presente en React a partir de la version 16.5 va a causar que muchos pongan a Redux y a otras librerías similares de lado. Pero como cualquier tecnología nueva, va a tomar un tiempo en volverse el nuevo estándar, incluso si es el reemplazo definitivo de <span class="redux">**Redux**</span>, lo cual en mi modesta opinión, no estoy convencido que vaya a ser así.

***


**Referencias:**

* [Documentación de Redux en Español](https://es.redux.js.org)
* [Redux - Not Dead Yet!](https://blog.isquaredsoftware.com/2018/03/redux-not-dead-yet/)