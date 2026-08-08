'use strict'
const botaoCriar =document.getElementById('criar')


function criarCaixa(numero) {
    const caixaConteiner=document.createElement('div')
    const caixaNumero=document.createElement('div')
   
    caixaNumero.className='caixa'
    caixaNumero.textContent= numero

    caixaConteiner.append(caixaNumero)
    return caixaConteiner
}

function adicionarCaixa(){
    const conteiner=document.getElementById('conteiner')

   for(let i=1; i<=1000;i++){
    const caixa= criarCaixa(i)
    conteiner.append(caixa)

   }
   
}

botaoCriar.addEventListener('click',adicionarCaixa)