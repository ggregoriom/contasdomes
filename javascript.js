let inDescri = document.getElementById('inDescri')
let inValor = document.getElementById('inValor')
let btnRegistro = document.getElementById('btnRegistro')
let outResposta = document.getElementById('outResposta')
let outQtd = document.getElementById('outQtd')
let numContas = 0
let valTotal = 0
function contas() {
    let descri = inDescri.value
    let valor = Number(inValor.value)
    if(descri == '' || valor <= 0) {
        alert('Digite um produto ou valor válido')
    }else {
        outResposta.innerHTML += descri + ' - R$' + valor.toFixed(2) + '<br>'
        valTotal = valor+valTotal
        numContas++
        outQtd.innerHTML = '-------------------<br>' + numContas + ' Conta(s) - Total R$' + valTotal  
    }
    
}
btnRegistro.addEventListener('click', contas)

