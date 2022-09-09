import geraSenha from "./geradores"

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('#qtd-carateres')
const chkMaiusculas = document.querySelector('#chk-maiusculas')
const chkMinusculas = document.querySelector('#chk-minusculas')
const chkNumeros = document.querySelector('#chk-numeros')
const chkSimbolos = document.querySelector('#chk-simbolos')
const btnGerarSenha = document.querySelector('.gerar-senha')

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        senhaGerada.innerText = geraSenha(
            qtdCaracteres.value,
            chkMaiusculas.checked,
            chkMinusculas.checked,
            chkNumeros.checked,
            chkSimbolos.checked
        )
    })
}

