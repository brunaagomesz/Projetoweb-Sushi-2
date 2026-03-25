function pedir(item){

let numero = "5511999999999"

let texto = `Olá, gostaria de pedir: ${item}`

let link =
`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`

window.open(link)

}

function scrollMenu(){

document
.getElementById("menu")
.scrollIntoView()

}