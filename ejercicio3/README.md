Bienvenid@ a la prueba técnica que hemos diseñado para quienes postulan al cargo de frontend developer en Envíame. La prueba está diseñada para ser resuelta en tres jornadas laborales (3 días).

Asegurate de dejar tu trabajo en un repositorio de github y al finalizar tu tarea nos compartes el repositorio donde deben incluirse todas las instrucciones para que podamos ejecutar tu trabajo de manera local.

Importante:
El código debe utilizar sintaxis ES6 (ES2015) o super

En caso de preguntas dirigete a: frontend-tech-test@enviame.io, usando el asunto [Frontend-Test]

Te deseamos mucho éxito!

Ejercicio 1 (2pts)
Crear un script (javascript/nodejs) que reciba un rango entre A y B y a partir de este rango se muestren en pantalla los números primos.

En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.

Ej: Para el rango entre 1 y 10, los números primos serán 2,3,5 y 7.

El entregable puede ser un script que se pueda ejecutar por terminal o una web simple sin diseño.

Ejercicio 2 (3pts)
Dado los siguientes json:​

   // JSON 
   let values =  {
        1: {
            carrier: "CCH",
            service: "DEX",
        },
        17: {
            carrier: "CHP",
            service: "express",
        }
   }
  // JSON
   let json = { 
                data: {
                    BUIN: {
                        limit: 1,
                        over_carrier_service_id: 17,
                        under_carrier_service_id: 17
                    },
                    LAJA: {
                        limit: 1,
                        over_carrier_service_id: 1,
                        under_carrier_service_id: 1
                    },
                    LEBU: {
                        limit: 1,
                        over_carrier_service_id: 1,
                        under_carrier_service_id: 1
                    },
                    LOTA: {
                        limit: 1,
                        over_carrier_service_id: 17,
                        under_carrier_service_id: 17
                    }
                }
            }
Se debe generar un script que con estas entradas genere el siguiente resultado:

   let result = {
        BUIN: {
            limit: 1,
            over: {
                carrier: "CHP",
                service: "express",
            },
            under: {
                carrier: "CHP",
                service: "express",
            }
        },
        LAJA: {
            limit: 1,
            over: {
                carrier: "CCH",
                service: "DEX",
            },
            under: {
                 carrier: "CCH",
                service: "DEX",
            }
        },
        LEBU: {
            limit: 1,
            over: {
                carrier: "CCH",
                service: "DEX",
            },
            under: {
                 carrier: "CCH",
                service: "DEX",
            }
        },
        LOTA: {
            limit: 1,
            over: {
                carrier: "CHP",
                service: "express",
            },
            under: {
                carrier: "CHP",
                service: "express",
            }
        }
   } 