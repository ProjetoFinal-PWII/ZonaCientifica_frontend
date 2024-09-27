# React + TypeScript + Vite

> [!WARNING]
> Você precisará de um container com o MongoDB rodando no docker na porta padrão (27017:27017). Mais informações abaixo.

## Iniciando o projeto

**1. Clone tanto o repositório do front-end quanto o do back-end.**
**2. Instale as dependências dentro de cada um:**

```
npm i
```
**3. Execute cada um em terminais diferentes:**

##### Back-end

```
npm start
```

##### Front-end

```
npm run dev
```

**4. Vá para a seguinte URL em seu navegador:**

```
http://localhost:5173/
```
## Utilizando

###### Primeiramente faça seu cadastro na tela de cadastro.

###### Ao fazer login complete seu perfil com o botão de editar perfil.

###### Você pode navegar entre as telas da aplicação pelo menu lateral encontrado no cabeçalho na parte superior esquerda da tela. 

###### Também é possível criar, participar e favoritar eventos.

## Criando o container docker
```
sudo docker pull mongo
```
```
sudo docker network create mongo-network
```
```
sudo docker run --network mongo-network --name mongo -p 27017:27017 -d mongo:latest.
```
#### Desenvolvido por:
[Alisson Almeida](https://github.com/AlissonAlmeidaSS), [Guilherme Costa](https://github.com/guilhercos) e [Leonardo Mendes](https://github.com/leomendes18)
