/* UNIVERSIDADE FEDERAL DO SUL E SUDESTE DO PARA
FACULDADE DE ENGENHARIA DA COMPUTAÇÃO
Disciplina: Avaliação de Desempenho de Sistemas
Prof. Dr. João Vitor Carmona
Equipe: Alaim de Jesus Leão Costa; Henrique Pereira Viana; Klauber Araujo Sousa
Implementação de sistema de aeroporto
 */
var n1 = document.querySelector('#numUsua')
var n2 = document.querySelector('#numAtendente')
var n3 = document.querySelector('#numAtendimento')
var capacidade = document.querySelector('#cap_Atendimento')
var fila = document.querySelector('#temp_fila')
var sistema = document.querySelector('#temp_sistema')


function capacidadeAtendi() {
    // retorno a capacidade de atendimento na interface
    capacidade.innerHTML = parseInt(n2.value) * parseInt(n3.value)

    // capacidade total de atendimento
    var capaci_total = parseInt(n2.value) * parseInt(n3.value)

    //calculo do tempo estimado no sistema, considerando o tempo na fila
    sistema.innerHTML = (1 / (capaci_total - parseInt(n1.value))).toFixed(4) * 60

    // tempo de espera do cliente na fila
    var calculo_fila = parseFloat(n1.value) / (capaci_total * (capaci_total - parseFloat(n1.value)))

    if (calculo_fila > 0) {
        //consertar o tempo de espera, segundo esta maior 
        // tempoFilaEsp = new Date()
        var tempoFila = calculo_fila * 60
        //var tempoFilaEsp = tempoFila.getSec
        return fila.innerHTML = tempoFila.toFixed(2)

    } else {
        //diferença do numero de clientes pela capacidade de atendimento
        var diferen = parseInt(n1.value) - capaci_total
        //retorna o maior numero inteiro
        var n = Math.ceil((diferen / n3.value) + parseInt(n2.value))
        var numAtn = Math.ceil((diferen / n2.value) + parseInt(n3.value))

        confirm("Tempo de chegada maior que a capacidade de atendimento!\n" +
            "Para melhor atender aos clientes, você pode\n" +
            "Aumentar o número de atendentes para " + n + ",\n" +
            "Ou cada atendente pode atender a " + numAtn + " clientes!\n")

    }
}