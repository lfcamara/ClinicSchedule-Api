# ClinicSchedule-Api / Cubos - Desafio Técnico Backend

## Sumário

- [API](#api)
- [Instalação](#instalação)
- [Execução](#execução)

## API

A ClinicSchedule-Api, ao ser executada pela primeira vez, irá gerar um calendário com o início sendo a data presente e seu fim sendo 3 meses no futuro (Exemplo: início: 08-12-2020, fim: 08-03-2020). Esta funcionalidade foi implementada a partir da ideia de que o usuário, em sua primeira requisição, pode cadastrar novos horários para diferentes dias da semana (Exemplo: segundas e quartas) ou até mesmo para todos os dias. Sendo assim, este método irá permitir uma melhor visibilidade dos horários cadastrados, sendo este um período menor e finito.
Com a API devidamente instalada e sendo executada, o usuáraio poderá realizar 4 tipos de requisição:

1. Cadastrar uma nova regra
```shell
URL: `http://localhost:3000/schedule`
Type: POST
Body:
     {
        day:,
        intervals: []
     }
```

2. Deletar uma regra
```shell
URL: `http://localhost:3000`
Type: DELETE
Params: /:day
```

3. Visualizar todas as regras cadastradas
```shell
URL: `http://localhost:3000/`
Type: GET
```

4. Visualizar regras cadastradas em um determinado período
```shell
URL: `http://localhost:3000`
Type: GET
Params: /:period
```

## Instalação

1. Clone o repositório com 
```shell
$ git clone https://github.com/lfcamara/Recipes-Api.git
```
2. Utilizando a linha de comando no diretório onde o projeto foi clonado, execute o comando 
```shell
$ npm install
```

## Execução

Utilizando a linha de comando no diretório onde o projeto foi clonado execute o comando `$ npm start`
Após esta etapa, o projeto já estará sendo executado na porta 3000.
