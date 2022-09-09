function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function geraMaicuscula() {
    return String.fromCharCode(rand(65, 91))
}

function geraMinuscula() {
    return String.fromCharCode(rand(97, 123))
}

function geraNumero() {
    return String.fromCharCode(rand(48, 58))
}

function geraSimbolo() {
    const simbolos = ',.;~^[]!@#$%¨&*()_+=-:><"`´'
    return simbolos[rand(0, simbolos.length)]
}

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = []
    const geradores = []

    if (maiusculas) geradores.push(geraMaicuscula)
    if (minusculas) geradores.push(geraMinuscula)
    if (numeros) geradores.push(geraNumero)
    if (simbolos) geradores.push(geraSimbolo)

    if (geradores.length === 0) return 'Nenhuma opção selecionada'

    for (let i = 0; i < qtd; i++) {
        senhaArray.push(geradores[rand(0, geradores.length)]())
    }
    return senhaArray.join('')
}