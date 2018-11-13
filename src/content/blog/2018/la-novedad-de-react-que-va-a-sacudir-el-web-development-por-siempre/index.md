---
title: "La Novedad De React Que Va A Sacudir El Web Development Por Siempre 🆕"
date: "2018-11-12"
section: blog
cover_image: "./la-novedad-de-react-que-va-a-sacudir-el-web-development-por-siempre.jpg"
tags: [ 'React', 'Novedades', 'Español', 'Trends', 'Javascript' ]
---

Hace un par de semanas, durante la <span class="react">**React**</span> Conf 2018, se anunció una nueva feature que ha acaparado toda la atención del mundo del desarrollo web desde que fue descubierta al público. 

Se trata nada mas y nada menos que de **Hooks**, una feature que promete muchísimo y que seguramente va a revolucionar muchas facetas de nuestro campo por mucho tiempo. ¿Pero que son los **Hooks** de <span class="react">**React**</span>?

Si estas familiarizado con esta popular librería de desarrollo, sabrás que existen dos tipos diferentes de componentes y que ambos se usan bajo diferentes circunstancias. 

El primer tipo son los class components y los segundos son generalmente conocidos como stateless functional components. Como el nombre lo indica, los stateless functional components generalmente se usan cuando tu componente no requiere acceder al state. No solo eso, sino que no puedes utilizar ninguno de los métodos de ciclo de vida de <span class="react">**React**</span> como lo son *ComponentWillMount* o *ComponentWillUpdate*. 

Las ventajas de utilizar este tipo de componentes tienen que ver con el performance incrementado comparado con sus contrapartes con clase, así como la facilidad de comprensión ya que generalmente son simples de entender para cualquier developer.

De igual manera, si haz hecho aplicaciones con <span class="react">**React**</span>, sabrás que hay ocasiones en las cuales tienes que convertir tu stateless functional component en un class component ya que necesitas alguno de los elementos que mencione. 

Con **Hooks**, esto no será mas el caso. Tendrás acceso a los métodos de ciclo de vida y mas importantemente, al precioso state que es tantas veces necesario para que los componentes funcionen como uno quiere.

Naturalmente, hay ciertas previsiones con respecto a los **Hooks**.

La primera y mas importante es que, al momento de que publique este artículo, **Hooks** apenas esta en estado Alpha. Falta todavía un rato para que sea parte del core de <span class="react">**React**</span> y podamos usarlos sin tener que modificar nuestro archivo package.json y de aquí a que eso pase, por admisión del mismo Dan Abramov, va a haber muchos cambios al código fuente que pueden representar problemas al cambiar de versión.

La segunda previsión y la más técnica es que tienes que declarar tus **Hooks** al tope de tu componente. El orden es de imperativa importancia, ya que, si declaras tus **Hooks** después, vas a confundir la función render de <span class="react">**React**</span>, lo cual va a provocar que tu componente no funcione como esperas.

La última previsión es una extensión de la primera. Tiene apenas unos días que **Hooks** fue revelado al mundo y, por ende, no es apto para apps en producción. Algunos developers han convertido sus class components a functional components (nótese que ya no son stateless 😉) con **Hooks** y de momento todo funciona como ellos esperan, pero al cambiar de versión, es probable que vayan a tener que hacer refactoring a su código y quien sabe hasta qué punto.

Algo si es seguro, **Hooks** ha llegado para quedarse y el entusiasmo que ha recibido por parte de la comunidad es mas que merecido, solo falta ver a donde llevan esta emocionante nueva feature el equipo de <span class="react">**React**</span>.


***


**Referencias:**

* [Video donde se introduce Hooks en React Conf 2018](https://www.youtube.com/watch?v=V-QO-KO90iQ)
* [Pagina oficial de Hooks](https://reactjs.org/docs/hooks-intro.html)