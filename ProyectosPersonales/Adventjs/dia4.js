/**
 * 
 * Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

[1++][2-][3+][<]

Escribe una función que descifre el PIN a partir del código.

El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

Las operaciones se aplican en orden al número y son:

    + suma 1
    - resta 1

El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

También existe el bloque especial [<], que repite el dígito del bloque anterior.

Si al final hay menos de 4 dígitos, se debe devolver null.
[1++][2-][3+][<]
function decodeSantaPin(code) {
    const clean = code.match(/\[(.*?)\]/g);
    if (!clean) return null;
    let pin = [];
    for (const block of clean) {
        const content = block.slice(1, -1);
        if (content === '<') {
            if (pin.length === 0) return null;
            pin.push(pin[pin.length - 1]);
        }
        else {
            let value = parseInt(content[0]);
            for (let i = 1; i < content.length; i++) {
                const op = content[i];
                if (op === '+') value++;
                if (op === '-') value--;
            }
            value = ((value % 10) + 10) % 10;
            pin.push(value);
        }
    }
    if (pin.length === 4) {
        return pin.join('');
    } else {
        return null;
    }
}
 */

function decodeSantaPin(code) {
    const clean = code.match(/\[(.*?)\]/g);
    if (!clean) return null;

    let pin = [];

    for (const block of clean) {
        const content = block.slice(1, -1);

        if (content === '<') {
            if (pin.length === 0) return null;
            pin.push(pin[pin.length - 1]);
        } else {
            let value = parseInt(content[0]);

            for (let i = 1; i < content.length; i++) {
                content[i] === '+' ? value++ : value--;
            }
            pin.push((value % 10 + 10) % 10);
        }
    }

    return (pin.length === 4) ? pin.join('') : null;
}
console.log(
    decodeSantaPin('[9+][0-][4][<]'))