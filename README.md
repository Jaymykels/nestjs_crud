## Description

A simple event CRUD service

## Installation

```bash
# install dependencies
$ yarn

# create .env file and update the environment variables
$ cp .env.example .env
```

## Running the app

```bash
# start mongodb and redis for development
$ docker-compose up -d

# create dummy user
$ yarn seed:event

# start the application in development mode
$ yarn start
```