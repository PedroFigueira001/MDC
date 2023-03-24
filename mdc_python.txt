frase = '    Curso em Vídeo Python'
palavra = 'Papa Rele pípe Do'
tupla = ()
lista = [] or list()
dicionário = {'nome': 'Pedro', 'idade': 17} or dict()


#        F A T I A M E N T O


# Fatiamento de string é selecionada pelas colocações númerais onde estão cada letra de uma cadeia de caractéres.
print(frase[9])

# Fatiamento da letra 9 até a letra 20 (O ultimo número depois do :, é ignorado pelo Python.
print(frase[9:21])

# Fatiamento onde o ultimo :, é pulado.
print(palavra[0:17:4])

#Fatiamento do começo até o fim, fatiamento desde o começo até o 15, começa da 8 e vai até o final pulando de 2
print(frase[0:]), print(frase[:16]), print(frase[8::3])


#        A N Á L I S E


# Lê quantas letras tem em uma cadeia de cractéres (também incluindo os espaços).
print(len(frase))

# Conta quantas vezes determinada letra aparece em toda a cadeia de caractéres, procura uma letra com fatiamneto
print(frase.count('o')), print(frase.count('o', 0, 13))

# Encontra uma determinada palavra na cadeia de caratéres, mostrando a posição onde começa.
print(frase.find('Vídeo'))

# Deixa uma string em ordem alfabética.
print(sorted(frase))

# Procura a primeiro caso de uma string ou número desejado, por parâmetros
print(lista.index('Tesoura'))

# Analisa se um valor é númerico; e retorna como TRUE ou FALSE.
print(palavra.isnumeric())

# Analisa se uma string está com todas as letras em minúsculas; e retorna como TRUE ou FALSE.
print(palavra.islower())

# Analisa se uma string está com todas as letras em maiúsculas; e retorna como TRUE ou FALSE.
print(palavra.isupper())

# Analisa se um objeto pode ser mostrado na tela durante a execução do programa; e retorna como TRUE ou FALSE.
print(palavra.isprintable())

# Analisa o valor ou objeto retornando qual classe pertence.
print(palavra.__class__)


#        M O D I F I C A Ç Ã O


# Troca uma cadeia de caractéres colocando outra no lugar como método de substituição.
print(frase.replace('Python', 'Android'))

# Pega toda a string e muda todas as letras em letras maiúsculas(as que já estão em maiúsculas permanecem).
print(frase.upper())

# Pega toda a string e muda todas as letras em letras minúsculas(as que já estão em minúsculas permanecem).
print(frase.lower())

# Joga todas as letras para minúsculas menos a primeira letra do texto.
print(palavra.capitalize())

# Faz uma análise entre os espaços da string, colocando as primeiras letras em maiúsculas.
print(palavra.title())

# Remove os espaços no começo e no fim da string
print(frase.strip())

# Remove os ultimos espaços da direita
print(frase.rstrip())

# Remove os primeiros espaços da esquerda
print(frase.lstrip())

# O programa vai dizer se existe tal palavra na string, retornando como valor verdadeiro(True), ou falso(False).
print('Curso'in frase)

# Pega onde tiver espaços no meio de uma string fazendo uma divisão
print(frase.split())

# Faz uma junção das strings divididas, podendo adicionar colocar outras coisas nos espaços
print('-'.join(frase))


#       L I S T A


# Para adicionar um elemento no final de uma lista.
lista.append('Tesoura')

# Adiciona um elemento novo na lista, em uma posição específica
lista.insert(0, 'Batata')

# Deleta um elemento específico na lista
del lista[2]
lanche.pop(2)  # Delta o último elemento de uma lista. Obs: Mas, a opção aceita parâmetros
lista.remove('Tesoura')

# Cria uma lista já ordenada com números
valores = list(range(0, 11))

# Ordena todos os elementos em ordem alfabética ou númerica
valores.sort()
valores.sort(reverse=True)  #Obs: Faz a mesma coisa, só que ao contrário


#        D I C I O N Á R I O


# Mostra os valores que estão dentro do dicionário, (ex: Pedro, 17)
print(dicionário.values())

# Mostra as chaves (ex: nome, idade)
print(dicionário.keys())


#       F U N Ç Õ E S


# Ajuda interativa
help(print()) or print(input.__doc__)

# Se colocar aspas duplas 3 vezes e depois apertar ENTER, Você pode fazer a própria versão de sua Help
# PARÂMETROS OPICIONAIS: É colocado do lado de parâmetros. Basta colocar o sinal de = é um número; caso nenhum valor for
# atribuido ao valor.


def ABC(a=0, b=0, c=0):
    """

    :param a:
    :param b:
    :param c:
    :return:
    """

# A estrutura 'try' tem a função de ser uma medida com tratamentos de erros. Sua lógica se assemelha um pouco com
# a estrutura 'if and else'.

try:
    print('Olá, mundo!')
except (TypeError, ValueError):
    print('Não foi possível escrever o comando na tela')
else:
    print('O comando foi escrito com sucesso!')
