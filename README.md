# Critical links desafio tecnico

## Requerimentos

- Download [docker](https://www.docker.com/).

## Setup

- Comece por fazer clone ao repositorio:

```
git clone git@github.com:hugoburguete/critical-links-desafio-tecnico.git

ou

git clone https://github.com/hugoburguete/critical-links-desafio-tecnico.git
```

- Crie os containers com docker compose:

```
cd critical-links-desafio-tecnico

docker compose up
```

- Espere que os containers acabem de se construir.

- Assim que o backend estiver construido (pode verificar no terminal se o container `api-1` tem um log semelhante a `Nest application successfully started`), podera visitar
  - o backend em http://localhost:3000. Ira dizer "Hello world". Routes incluem `/student` e `/school-class`
  - o frontend em http://localhost:8080.

## Tests

Para executar unit tests:

- Na frontend:

```
# docker exec -it [FRONT_END_CONTAINER_NAME] npm run test

e.g

# docker exec -it critical-links-desafio-tecnico-app-1 npm run test
```

- Na backend:

```
# docker exec -it [BACK_END_CONTAINER_NAME] pnpm run test

e.g.

# docker exec -it critical-links-desafio-tecnico-api-1 pnpm run test
```

## Usar applicacao

Inicialmente, o botao para criar estudantes ira estar disabled uma vez que nao havera turmas disponiveis. Assim quer criar uma turma, podera entao registar estudantes.

## Outro

Eu tive que instalar `create-react-app` com `yarn` porque existe neste momento um [bug](https://github.com/facebook/create-react-app/issues/13717) introduzido com react 19 que gera erros quando se instala modules com npm/pnpm. Nao sei se isso se tornara problematico quando voces tentarem usar a app, mas deixo aqui a indicacao em caso de haver problemas na instalacao.

Qualquer questao, disponha :)
