<p style="background: white" align="center">
  <a href="http://mar1n.com" target="blank" ><img src="./public/assets/logo_square.png"  width="300" alt="Crypto dino Logo" /></a>
</p>

<p align="center">implementation of DDD (domain driven design) and CDD (component driven design) in a simple app for forecast of cryptocurrencies</p>

## Motivation

we find many article to what is an architecture and also what is the clean code, the onion architecture or hexagonal architecture. Some people understand by reading but I understand when I making ( you understand what I try ti say 😁)

in this repo, I will try to reproduce an DDD (backend side) and CDD( frontend side) with the following stack: Typescript everywhere.

![all stack](./public/assets/stack.png)

## Engineering

Before I start coding I choose to spend more time thinking about the architecture, how I could implement it in a small project, the best way is by painting a diagram.

you can see my brainstorm here [miro](https://miro.com/app/board/o9J_llP5RqU=/?invite_link_id=828246920801)

In essence, this application is cut off somewhere, the application logic is inside the domain folder and the interaction with other external elements is another folder depending on the type of interaction, you can see everything in the following image.

![all stack](./public/assets/ddd.png)

all things behind if for the backend side, for the frontend side:

![all stack](./public/assets/CDD.png)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm start

# watch mode
$ npm start:dev

# production mode
$ npm run start:prod
```
