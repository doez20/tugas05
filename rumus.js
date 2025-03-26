export function kalkulator(angka1, angka2, operator) {
    switch (operator) {
        case "+":
            return angka1 + angka2;
        case "-":
            return angka1 - angka2;
        case "*":
            return angka1 * angka2;
        case "/":
            return angka2 !== 0 ? angka1 / angka2 : "Tidak dapat membagi dengan nol!";
        default:
            return "Operator tidak valid!";
    }
}

//let a = kalkulator(1, 2, "+");
//console.log(a);

