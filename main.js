'use strict'
const botaoCriar =document.getElementById('criar')


function criarCaixa() {
    const caixa=document.createElement('div')
    caixa.className='caixa'
    caixa.textContent='2'
    return caixa
}

function adicionarCaixa(){
    const conteiner=document.getElementById('conteiner')

    const caixa= criarCaixa()

    conteiner.append(caixa)
}

botaoCriar.addEventListener('click',adicionarCaixa)