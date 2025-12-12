/**
 * La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
Cada línea indica qué juguete hay que fabricar y cuántas unidades.

Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades
 que no tienen sentido.

Tienes una lista de objetos con esta forma:

    toy: el nombre del juguete (string)
    quantity: cuántas unidades hay que fabricar (number)

Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:

    Cada juguete repetido tantas veces como indique quantity
    En el mismo orden en el que aparecen en la lista original
    Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)

 Ejemplos

const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']
Sin arrayFlatmap
function manufactureGifts(production) {
    let correctList = [];

    // Usamos 'of' en lugar de 'in' para obtener el objeto directamente ; Rembember, in recorre los indices
    // 2Eliminamos el .forEach intermedio que sobraba
    for (const element of production) {
        // 3. Usamos '<' en lugar de '<=' para la cantidad exacta
        for (let index = 0; index < element.quantity; index++) {
            correctList.push(element.toy);
        }
    }

    return correctList;
}
    function manufactureGifts(production) {
    return production.flatMap(item => { 
        if (item.quantity <= 0) { 
            return []; 
        } else { 
            return Array(item.quantity).fill(item.toy); 
        } 
    });
}
 */
/**
 * ! Tenemos que => Repetir en el array segun quantiy, y killear los juegues < 0
 */
function manufactureGifts(production) {
    return production.flatMap(item => {
        // Math.max(0, item.quantity) elige el mayor entre 0 y la cantidad.
        // Si quantity es -2, usa 0. Si es 5, usa 5.
        const safeQuantity = Math.max(0, item.quantity);

        return Array(safeQuantity).fill(item.toy);
    });
}

const production1 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
];

const result1 = manufactureGifts(production1);
console.log(result1);
const production2 = [
    { toy: 'train', quantity: 0 }, // no se fabrica
    { toy: 'bear', quantity: -2 }, // tampoco
    { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []