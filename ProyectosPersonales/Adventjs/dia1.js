/* Ejemplo que nos obtorgan
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1) -> Repara el regalo y devuelve el nuevo array limpio sin regalos roto. Un regalo roto es #
console.log(good1)
Santa ha recibido una lista de regalos, pero algunos están defectuosos. 
Un regalo es defectuoso si su nombre contiene el carácter #.

Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y 
devuelva una nueva lista que solo contenga los regalos sin defectos.
*/
const gifts1 = ['#broken', '#rusty']; //Array a limpiar, se deben limpiar 2

function filterGifts(gifts) {
    let giftsRepair = [];
    gifts.forEach(gift => {
        if (!gift.includes('#')) { 
            giftsRepair.push(gift);
        }
    });
    return giftsRepair;
}

let giftsReparados = filterGifts(gifts1);

console.log(giftsReparados);