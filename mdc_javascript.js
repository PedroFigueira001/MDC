// Comentário em JavaScript "//" ou "/**/"

/*


#Para escrever no console:

    Console.log('')

# Comando para exibir um alerta:

    window.alert('mensagem')

# Comando para exibir uma confirmação do usuário:

    window.confirm('mensagem')

# Comando que exibe um prompt, permitindo o usuário a digitar:

    window.prompt('mensagem')


# V A R I Á V E I S


# Identificadores:

- Podem começar com letra, $ ou _
- Não podem começar com números
- É possível usar letras ou números
- É pssível usar acentos e símbolos
- Não podem conter espaços
- Não podem ser palavras reservadas
- Váriaveis do tipo INT e FLOAT = number
    Tipos de Váriaveis: 
        number, string, boolean, null, undefinedn, object, function


Para criar variáveis basta digirar a palavra "var" e em seguida colocar o sinal de =, e tudo o que estiver depois é o nome da variável.

var = 'nome da variável'



# Conversão:

    - Converter uma variável em um número inteiro:
        parseInt(n) ou Number(n)
    - Converter uma variável em um número real:
        parseFloat(n)
    - Converter um número para uma string:
        String(n) ou n.toString()



# Formatando Strings

var s = 'JavaScript' ou 'html'

'Eu estou aprendendo s'      // não faz interpolação
'Eu estou aprendendo' + s    // usa concatenação
'Eu estou aprendendo ${s}'   // usa template string
s.length                     // Quantos caracteres a string tem
s.toUpperCase()              // tudo para 'MAIÚSCULAS'
s.toLowerCase()              // tudo para 'MINÚSCULAS'

var = n = 1545.5

# É um método intero que exibe um número com modficações de casas decimais:

    n.toFixed(quantidade de casas decimais)

        # Para mudar algo no número:

            n.toFixed().replace('', '')

# Faz uma modificação de string localizada. Podendo acrescentar possíveis implementações CSS:

    n.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

# Converter uma variável em um número inteiro:

    parseInt(n) ou Number(n)

# Converter uma variável em um número real:
        
    parseFloat(n)

# Converter um número para uma string:

    String(n) ou n.toString()

# Ordem de precedência dos operadores aritméticos:

() --> ** --> * --> / --> % --> + --> -

Operadores aritméticos > relacionais > lógicos

() = Parentêses (priorizam números dentro)
** = Potência
* = Multiplicação
/ = Divisão
% = Resto da Divisão
+ = Adição
- = Subtração
=== = identidade --> Analisam se uma variavel são o mesmo valor e o mesmo tipo.



# O P E R A D O R E S   L Ó G I C O S


!  = Negação

&& = Conjunção:

    true + true   = true
    true + false  = false
    false + true  = false
    false + false = false

|| = Disjunção:

    true + true   = true
    true + false  = true
    false + true  = true
    false + false = false

# Operados ternários

# funciona como um 'if' por ser uma estrutura lógica, porém, só retorna em valor lógico.

<teste> ? <true> : <false>



# Á R V O R E   D O M

window
    location
    history
    document
        html
            head
                meta
                title
            body
                div
                h1
                p

# alguns comandos para acessar a Árvore DOM:

    document.getElementBy... (Name, ID, ClassName, TagName)[n] <-- parâmetro por númeração

#Eventos DOM

# para fazer um input para o clinte digitar:

    <input type="" name="" or value="">

# Criar uma função:

    function 'nome da função'(parâmetros){

    }

# [Parâmetros opcionais] atribuiem outro valor quando não há uma primeira atribuição.

    function 'nome da função' (x = 0){
        return x
    }

    console.log('nome da função'(5))

 # Relaciona o nome de da função com os eventos de forma continua. Ou seja, esse código fica constante-
 mente "ouvindo" o que está acontecendo para assim, conseguir captar uma função para aciona-lá. Funciona
 como uma ligação entre o JavaScript e o HTML e CSS.

    addEventListener('evento', 'nome_da_função')


# C O N D I Ç Õ E S

# Condição simples:

    if (condição) {

    }

# Condição composta:

    if (condição) {

    }
    else {

    }

# Condição aninhada:

if (condição) {

    }
    else if (condição) {

    }

# Condições multiplas:

switch (expressão) {
    case valor 1:

        
        break
    case valor 2:

        
        break
    case valor 3:

        
        break
    default:

}



# E S T R U T U R A S  D E  R E P E T I Ç Ã O


# Com teste lógico no início:

function função(){
    while (condição){

    }
}

# Executa o bloco primeiro, para depois fazer o teste lógico:

do (função){

} while (condição)


# Com variavel de controle:

for (teste, inicio, incr) {

}


# V E T O R E S (arrays)


# Vetores nada mais são do que variáveis compostas que possuem mais de um elemento que podem ser acessados
coletivamente ou individualmente por meio dos seus índices que especificam cada valor armazenado.

let num = []

# Para acresentar um valor em uma determinada posição ou, para substituir um valor de um índice já existente:

num[1] = 4

# Para acresentar um valor em sua última posição de índice:

num.push(10)

# Tamanho de um vetor:

num.length

# Ordena todos os valores em ordem crescente:

num.sort()

# FOR mais otimizado e mais recomendado para utilizar em vetores:

for (var contador in num){
    console.log(num[contador])
}


# Faz uma busca por um determinado valor que está armazenado em um vetor, e retorna ao valor do índice. Caso o número não seja encontrado, retornará o valor -1:

num.indexOf(6)


*/