/* Ejemplo que nos obtorgan
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1) -> Repara el regalo y devuelve el nuevo array limpio sin regalos roto. Un regalo roto es #
console.log(good1)
Santa ha recibido una lista de regalos, pero algunos están defectuosos. 
Un regalo es defectuoso si su nombre contiene el carácter #.

Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y 
devuelva una nueva lista que solo contenga los regalos sin defectos.
*/

function filterGifts(gifts) {
    let giftsRepair = [];
    gifts.forEach(gift => {
        if (!gift.includes('#')) { 
            giftsRepair.push(gift);
        }
    });
    return giftsRepair;
}

const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
const gifts4 = [,]
const good4 = filterGifts(gifts4)
console.log(good4)