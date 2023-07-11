const jogada1 = 2;
const jogada2 = 1;
let resultado;

resultado = (jogada1 + jogada2) % 2;

if (!resultado) {
    console.log("par.");
} else {
    console.log("ímpar.")
}