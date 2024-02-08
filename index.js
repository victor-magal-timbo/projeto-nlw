const perguntas = [
    {
        pergunta: "O que é um algoritmo?",
        respostas: [
            "Um tipo de linguagem de programação",
            "Um tipo de dado",
            "Um conjunto de instruções para resolver um problema",
            "Um dispositivo de hardware",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador 'if' em programação?",
        respostas: [
            "Repetir um bloco de código",
            "Executar um bloco de código se uma condição for verdadeira",
            "Interromper a execução do programa",
            "Definir uma função",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma variável em programação?",
        respostas: [
            "Um valor constante",
            "Um tipo de dado",
            "Um local de armazenamento com um nome associado",
            "Um operador lógico",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um loop em programação?",
        respostas: [
            "Um erro de sintaxe",
            "Uma estrutura de decisão",
            "Um conjunto de instruções para resolver um problema",
            "Um bloco de código que é executado repetidamente",
        ],
        correta: 3
    },
    {
        pergunta: "Qual é a finalidade da declaração 'return' em uma função?",
        respostas: [
            "Imprimir um valor na tela",
            "Interromper a execução da função",
            "Retornar um valor para quem chamou a função",
            "Definir o tipo de retorno da função",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um array em programação?",
        respostas: [
            "Uma estrutura de controle",
            "Um tipo de dado primitivo",
            "Uma sequência de elementos do mesmo tipo",
            "Um operador aritmético",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Não há diferença, ambos são iguais",
            "Um é para comparação e o outro para atribuição",
            "O primeiro compara apenas os valores e o segundo compara os valores e os tipos",
            "O primeiro compara os valores e os tipos e o segundo compara apenas os valores",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função em programação?",
        respostas: [
            "Um conjunto de instruções para resolver um problema",
            "Uma variável",
            "Um tipo de dado",
            "Um operador lógico",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um objeto em JavaScript?",
        respostas: [
            "Um tipo de dado primitivo",
            "Um tipo de dado que representa uma coleção de propriedades",
            "Um operador aritmético",
            "Uma estrutura de controle",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a finalidade da declaração 'let' em JavaScript?",
        respostas: [
            "Declarar uma variável que pode ser modificada",
            "Declarar uma variável que não pode ser modificada",
            "Declarar uma função",
            "Declarar uma constante",
        ],
        correta: 0
    }
];

const template = window.document.querySelector('template')
const quiz = window.document.querySelector('#quiz')

const corretas = new Set()
let totalDePerguntas = perguntas.length
let mostrarTotal = window.document.querySelector('#acertos span')
//mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(let item of perguntas){
    // copia o conteudo das perguntas do template
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    // copia o conteudo das repostas do template
    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'perguntas-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            let estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    // remove o primero item (Respostas)
    quizItem.querySelector('dl dt').remove()

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}