// Tipos de datos en JavaScript          
console.log(typeof 42);                               // number
console.log(typeof 'Veinticinco');                    // string
console.log(typeof -666);                             // number
console.log(typeof true);                             // boolean
console.log(typeof 0);                                // number
console.log(typeof '');                               // string
console.log(typeof null);                             // object (valor especial en JS)
console.log(typeof undefined);                        // undefined
console.log(typeof FALSE);                            // boolean
console.log(typeof 3.1416);                           // number
console.log(typeof 'Hola');                           // string
console.log(typeof false);                            // boolean
console.log(typeof function() {});                    // function (función anónima)
console.log(typeof (() => {}));                       // function (función flecha)
console.log(typeof {});                               // object (objeto literal)
console.log(typeof []);                               // object (arreglo)
console.log(typeof new Date());                       // object (fecha)
console.log(typeof /abc/);                            // object (expresión regular)
console.log(typeof NaN);                              // number (NaN es de tipo number)
console.log(typeof Infinity);                         // number (Infinity es de tipo number)
console.log(typeof 10n);                              // bigint (números grandes)
console.log(typeof Symbol('sym'));                    // symbol (símbolo)
console.log(typeof new Boolean(true));                // object (objeto Boolean)
console.log(typeof new Number(123));                  // object (objeto Number)
console.log(typeof new String('text'));               // object (objeto String)
console.log(typeof String(123));                      // string (conversión a string)
console.log(typeof `template literal`);               // string (literal de plantilla)
console.log(typeof (42 + ' is a number'));            // string (resultado de concatenar un número con una cadena)
console.log(typeof Object(Symbol('foo')));            // object (envoltorio de símbolo)
console.log(typeof typeof 42);                        // string (el resultado de typeof 42 es 'number', que es string)
console.log(typeof new Function());                   // function (creado con el constructor Function)
console.log(typeof JSON);                             // object (objeto JSON)
console.log(typeof Math);                             // object (objeto Math)
console.log(typeof console);                          // object (objeto console)
console.log(typeof new Error('error'));               // object (objeto Error)
console.log(typeof new Promise(() => {}));            // object (Promise)
function* gen() {}                           
console.log(typeof gen);                              // function (función generadora)
console.log(typeof async function() {});               // function (función asíncrona)
console.log(typeof eval);                             // function (eval es una función)
console.log(typeof Reflect);                          // object (objeto Reflect)
console.log(typeof new Proxy({}, {}));                // object (Proxy)
console.log(typeof new WeakMap());                    // object (WeakMap)
console.log(typeof new WeakSet());                    // object (WeakSet)
console.log(typeof new Map());                        // object (Map)
console.log(typeof new Set());                        // object (Set)
console.log(typeof new Int8Array());                  // object (Int8Array)
console.log(typeof new Uint8Array());                 // object (Uint8Array)
console.log(typeof new ArrayBuffer(8));               // object (ArrayBuffer)
console.log(typeof new DataView(new ArrayBuffer(8))); // object (DataView)
console.log(typeof Promise.resolve());                // object (Promise resuelto)
console.log(typeof new RegExp('a'));                  // object (expresión regular creada con constructor)
class MyClass {}                            
console.log(typeof MyClass);                          // function (las clases son funciones en JS)