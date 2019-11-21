<p align="center">
    <a src="https://fga-eps-mds.github.io/2019.2-Amika-Wiki/">
        <img src="https://raw.githubusercontent.com/fga-eps-mds/2019.2-Amika-Wiki/master/assets/img/AmikaComNome.png">
    </a>
</p>


#### [Amika-Backend](https://github.com/fga-eps-mds/2019.2-Amika-Backend)
[![Build Status](https://travis-ci.org/fga-eps-mds/2019.2-Amika-Backend.svg?branch=develop)](https://travis-ci.org/fga-eps-mds/2019.2-Amika-Backend)
[![Maintainability](https://api.codeclimate.com/v1/badges/fa0fbed2c8fa7014e542/maintainability)](https://codeclimate.com/github/fga-eps-mds/2019.2-Amika-Backend/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/fga-eps-mds/2019.2-Amika-Backend/badge.svg?branch=develop)](https://coveralls.io/github/fga-eps-mds/2019.2-Amika-Backend?branch=develop)

#### Ambientes:
- [Desenvolvimento](https://amika-backend-dev.herokuapp.com/)
- [Homologação](https://amika-backend-stg.herokuapp.com/)
- [Produção](https://amika-backend.herokuapp.com/)

#### [Amika-Frontend](https://github.com/fga-eps-mds/2019.2-Amika-Frontend)
[![Build Status](https://travis-ci.org/fga-eps-mds/2019.2-Amika-Frontend.svg?branch=develop)](https://travis-ci.org/fga-eps-mds/2019.2-Amika-Frontend)
[![Maintainability](https://api.codeclimate.com/v1/badges/e6c21399ba32b11ab1d1/maintainability)](https://codeclimate.com/github/fga-eps-mds/2019.2-Amika-Frontend/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/fga-eps-mds/2019.2-Amika-Frontend/badge.svg?branch=develop)](https://coveralls.io/github/fga-eps-mds/2019.2-Amika-Frontend?branch=develop)

#### Ambientes:
- [Desenvolvimento](https://amika-dev.herokuapp.com/)
- [Homologação](https://amika-stg.herokuapp.com/)
- [Produção](https://amika-prod.herokuapp.com/)

#### [Amika-Wiki](https://github.com/fga-eps-mds/2019.2-Amika-Wiki)
- [Github Pages](https://fga-eps-mds.github.io/2019.2-Amika-Wiki/#/)

## Sobre

Amika é um Progressive Web App com o objetivo de auxiliar a organização da disciplina de Tópicos Especiais em Engenharia de Software, com abordagem em Felicidade, da Universidade de Brasília. Assim como também proporcionar para os alunos um ambiente de interação e ajuda para lidar com problemas de saúde mental, fornecendo uma experiência mais agradável. Este repositório se refere ao Frontend da aplicação, caso deseje contribuir com nosso Backend, visite o repositório da nossa API: [Amika-Backend](https://github.com/fga-eps-mds/2019.2-Amika-Backend).

## Documentação

Documentação do projeto está disponível em [Amika Wiki](https://fga-eps-mds.github.io/2019.2-Amika-Wiki/#/).

## Tecnologias Utilizadas

Este repositório foi desenvolvido com o Framework [Angular](https://angular.io) escrito em [TypeScript](https://www.typescriptlang.org) e se comunica com a API através de requisições HTTP auxiliado pelo [Django REST framework](https://www.django-rest-framework.org). O ambiente de desenvolvimento é isolado em containers com o [Docker](https://www.docker.com) e o gerenciamento é feito pelo [Docker Compose](https://docs.docker.com/compose/). A integração contínua é feita pelo [Travis CI](https://docs.travis-ci.com). Os deployments de desenvolvimentos, homologações e produções são feitos no [Heroku](https://devcenter.heroku.com).


## Instalação

  #### Pré-requisitos
  * [Git](https://git-scm.com/)
  * [Docker](https://www.docker.com/get-docker)
  * [Docker-composer](https://docs.docker.com/compose/install/#install-compose)

  #### Configuração

  Clone o repositório no diretório desejado
  ```bash
  git clone https://github.com/fga-eps-mds/2019.2-Amika-Frontend
  ```

  Utilize o seguinte comando para subir a aplicação
  ```bash
  docker-compose up
  ```

  A aplicação pode ser acessada através do localhost:
  ```
  localhost:4200
  ```
  
  
  ## Comandos Úteis

  #### Docker
  
  Listar containers ativos
  ```bash
  docker ps
  ```

  Entrar no bash do container
  ```bash
  docker exec -it frontend bash
  ```

  Parar o container
  ```
  docker stop frontend
  ```
  
  Remover o container
  ```
  docker rm frontend
  ```

  #### Angular(Comandos executados dentro do container)

  Criar um novo componente
  ```bash
  ng g c nomeComponente
  ```

  Criar um novo serviço
  ```bash
  ng g s nomeServico
  ```

  Rodar os testes
  ```
  ng test
  ```


#### Como contribuir
Para contribuir com o projeto é importante seguir o [Guia de Contribuição](https://github.com/fga-eps-mds/2019.2-Amika-Wiki/blob/master/.github/CONTRIBUTING.md) do repositório, assim como seguir as [Politicas de Commits e Branches](https://fga-eps-mds.github.io/2019.2-Amika-Wiki/#/docs/projeto/planogerencia) presentes no nosso plano de gerencia de software.

## Licença

Este projeto está licenciado sob os termos da [licença MIT](https://github.com/fga-eps-mds/2019.2-Amika-Wiki/blob/master/LICENSE).

Copyright (c) 2019 Amika
