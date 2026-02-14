
let nivel = 78

Diamante()

function Diamante(){
    console.log("O Herói tem de saldo de " + nivel  + " está no")
}


switch (true){
    case nivel <= 10:
    console.log("nivel Ferro")
    break

    case nivel >= 11 && nivel < 20:
    console.log("nivel Bronze")
    break

    case nivel >= 21 && nivel < 50:
    console.log("nivel Prata")
    break

    case nivel >= 51 && nivel < 80:
    console.log("nivel Ouro")
    break

    case nivel >= 81 && nivel < 90:
    console.log("nivel Diamante")
    break

    case nivel >= 91 && nivel < 100:
    console.log("nivel lendário")
    break

    case nivel >= 101:
    console.log("nivel Imortal")
    break
}

