/**
 * En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

Le pasan dos parámetros:

    size: el tamaño del regalo cuadrado
    symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)

El regalo debe cumplir:

    *!Debe ser un cuadrado de size x size.
    *!El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
    *!Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
    *!El resultado final debe ser un string con saltos de línea \n.

Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?

const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 *\ 
 */
function drawGift(size, symbol) {
    //SIZE DEBE SER SIEMPRE ENTERO
    try {
        size = parseInt(size); //Si es decimal, se redondea, si no, f por el becario

    } catch (error) {
        return 'Peque becario, haz pasado un valor no entero. Debe ser valores enteros.';
    }
}