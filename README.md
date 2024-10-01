1.¿Cuál es la diferencia entre un componente UI y un componente funcional en React?

Un componente UI es básicamente todo lo que ves en pantalla, es decir, se enfoca en la parte visual y en cómo se presenta la información. Mientras que un componente funcional es más un "trabajador" que, aunque también puede mostrar cosas en pantalla, se define principalmente por ser una función de JavaScript que recibe propiedades y devuelve algo, normalmente un pedazo de UI.

¿Qué son las props en React y cuál es su propósito principal?

Las props son como parámetros que le pasas a un componente para que pueda funcionar de manera específica. Es como cuando le das instrucciones a alguien para que haga algo de una manera determinada. En React, se usan para pasar información de un componente a otro, como el título de una tarjeta o el color de un botón, lo que permite reutilizar los componentes de manera flexible.

¿Qué son los children props en React y por qué no se recomienda su uso excesivo?

Los children props son una forma de pasar contenido a un componente para que lo "envuelva" o lo muestre. Es como poner algo dentro de una caja. Por ejemplo, podrías tener un componente <Contenedor> y pasarle un par de botones o textos como "hijos". Aunque es muy útil, no se recomienda abusar de él porque puede hacer que el código sea un poco más enredado y difícil de entender, especialmente si tienes componentes que dependen de mucho contenido anidado.

¿Qué es useState en React y para qué se utiliza principalmente?

useState es un gancho (hook) que te permite añadir estado a un componente funcional. Imagina que quieres que algo cambie cuando el usuario haga clic, como un contador que aumenta o una lista que se actualiza. useState es lo que te permite guardar ese valor y actualizarlo cuando algo suceda. Básicamente, se usa para gestionar valores que pueden cambiar, como el contenido de un input o si un botón está activo o no.



