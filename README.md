# Example MERN stack project

This project is used as a playground for learning basic Web development concepts

It is consisted out of a `client` and `server` main components that are versioned in this repository as
a [monorepo](https://en.wikipedia.org/wiki/Monorepo) for ease of management

## Client

The client is a basic React single page web application.

## Server

The server is a basic ExpressJS REST API server application.

# Installation and Setup

Clone the project

```bash
git clone git@github.com:LiliLilou/mern.git
```

## [Server

Install all the necessary dependencies

```bash
cd ./server
npm install
```

Start MongoDB through Docker

```bash
docker compose up -d 
```

Start the Server

```bash
npm run start
```

> Verify that the MongoDB is up and running [http://localhost:8081](http://localhost:8081)

## Client

Install all the necessary dependencies

```bash
cd ./client
npm install
```
