let numNotas = 0
let notas = []

function isNumber(value) {
    return !isNaN(Number(value));
}

document.getElementById("addNota").addEventListener("click", function(){
    let nota = document.getElementById("notas").value
    document.getElementById("notas").value = ""

    if(nota>10 || nota<0 || nota==null || nota==undefined || !isNumber(nota)){
        alert("Você não pode digitar essa nota")
    } else {
        numNotas++
        var texto = document.createElement("p")
        texto.innerText = "A nota " + numNotas + " foi " + nota
        document.getElementById("notasAlunos").append(texto)
        notas.push(nota)
    }
})

document.getElementById("calcMedia").addEventListener("click", function(){
    let totalNotas = 0
    notas.forEach((grade)=> {
        totalNotas+= Number(grade)
    })
    let media = (totalNotas / notas.length).toFixed(2)
    document.getElementById("media").innerText = "A média é " + media
})