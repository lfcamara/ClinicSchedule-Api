# ClinicSchedule-Api / Cubos - Desafio Técnico Backend

## Sumário

- [API](#api)
- [Instalação](#instalação)
- [Execução](#execução)

## API

A ClinicSchedule-Api, ao ser executada pela primeira vez, irá gerar um calendário com o início sendo a data presente e seu fim sendo 3 meses no futuro (Exemplo: início: 08-12-2020, fim: 08-03-2020). Esta funcionalidade foi implementada a partir da ideia de que o usuário, em sua primeira requisição, pode cadastrar novos horários para diferentes dias da semana (Exemplo: segundas e quartas) ou até mesmo para todos os dias. Sendo assim, este método irá permitir uma melhor visibilidade dos horários cadastrados, sendo este um período menor e finito.
Com a API devidamente instalada e sendo executada, o usuáraio poderá realizar 4 tipos de requisição:

1. Cadastrar uma nova regra:

Há 3 formas diferentes para o usuário cadastrar novas regras:

     a. Para cadastrar em todos os dias do calendário o usuário utilizará a palavra-chave *diariamente*;

     b. Para cadastrar por dias da semana o usuário irá informar o(s) dia(s) desejado, separados por vírgula se necessário (Exemplos: segunda / sabado,domingo);

     c. Para cadastrar uma data específica o usuário deve informar a data no seguinte padrão *DD-MM-YYYY*

```shell
URL: `http://localhost:3000/schedule`
Type: POST
Body:
     {
        day:,
        intervals: []
     }
```

2. Deletar uma regra:

A opção de remoção de regra contempla as 3 formas de cadastro informadas anteriormente, sendo a mudança apenas na passagem da informação.
Enquanto no cadastro a informação deve ser passado no atributo *day* do *Body*, para deletar devemos informar como parâmetro direto na URL, após a barra.

```shell
URL: `http://localhost:3000`
Type: DELETE
Params: /:day
```

3. Visualizar todas as regras cadastradas

A API irá retornar apenas os dias com regras cadastradas.
Não é necessário nenhuma passagem de informação por parte do usuário para esta requisição.

```shell
URL: `http://localhost:3000/`
Type: GET
```

4. Visualizar regras cadastradas em um determinado período

O usuário deve informar um intervalo de datas no padrão *DD-MM-YYYY* como parâmetro direto na URL, após a barra.
A API irá retornar apenas os dias com regras cadastradas dentro do intervalo informado. 

```shell
URL: `http://localhost:3000`
Type: GET
Params: /:period
```

## Instalação

1. Clone o repositório com 
```shell
$ git clone https://github.com/lfcamara/ClinicSchedule-Api.git
```
2. Utilizando a linha de comando no diretório onde o projeto foi clonado, execute o comando 
```shell
$ npm install
```

## Execução

Utilizando a linha de comando no diretório onde o projeto foi clonado execute o comando `$ npm start`
Após esta etapa, o projeto já estará sendo executado na porta 3000.
