'use strict'
const botaoCriar =document.getElementById('criar')


function criarCaixa(numero) {
    const caixaConteiner=document.createElement('div')
    const caixaNumero=document.createElement('div')
    
    caixaNumero.className='caixa-numero'
    caixaNumero.textContent= numero

    const caixaNome=document.createElement('div')
    caixaNome.className= 'caixa-nome'
    caixaNome.textContent= 'Aluno -'+ numero

    caixaConteiner.className='caixa-numero'
    caixaConteiner.append(caixaNumero,caixaNome)
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