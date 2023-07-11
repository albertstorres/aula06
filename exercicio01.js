const jogada1 = "papel";
const jogada2 = "pedra";

if (jogada1 == jogada2) {
    console.log("EMPATE!");
} else if (jogada1 == "pedra") {
    if (jogada2 == "papel") {
        console.log(`${jogada2} vence de ${jogada1}. JOGADA 2, VENCEU!`);
    } else {
        console.log(`${jogada1} ganha de ${jogada2}. JOGADA 1, VENCEU!`);
    }
} else if (jogada1 == "papel") {
    if (jogada2 == "tesoura") {
        console.log(`${jogada2} vence de ${jogada1}. JOGADA 2, VENCEU!`);
    } else {
        console.log(`${jogada1} vence de ${jogada2}. JOGADA 1, VENCEU! `);
    }
} else if (jogada1 == "tesoura") {
    if (jogada2 == "pedra") {
        console.log(`${jogada2} vence de ${jogada1}. JOGADA 2, VENCEU!`);
    } else {
        console.log(`${jogada1} vence de ${jogada2}. JOGADA 1, VENCEU!`);
    }
}
