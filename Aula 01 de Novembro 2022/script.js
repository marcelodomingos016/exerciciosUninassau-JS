
var mensage

function load() {
    mensage = prompt("Seu nome?")
}

function touch() {
    alert(mensage)
}

function touch2() {
    alert(document.title)
}

var valor = 30

document.write("<br/><br/> Minha primeira linha <br/>")
document.write("<br/>Nessa linha aparecerá o resulatado de: " + (10 * 10 + valor))

function idade(anos) {
    if(anos > 17) {
        document.write("Maior de idade")
    } else {
        document.write("Menor de idade")
    }
}