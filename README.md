# DevRadar
Find developers based on your favorite technologies!

![version](https://img.shields.io/badge/version-1.0.0-green)

App demo : https://github.com/jeferson-sb/devradar/releases

## Technologies used
- [React](https://reactjs.org/) for FrontEnd
- [React Native](https://reactnative.dev/) for Mobile
- [Node.js](https://nodejs.org/) for Backend

## Quick Start

### Pre-requisites

- Node.js version 8.0 or greater
- Download & Install [MongoDB](https://www.mongodb.com/download-center)
- Download & Install [Mongo Compass](https://www.mongodb.com/products/compass)

### Installation

**Rename `.env.example` to `.env`**

In your project folder

> cd backend && yarn && yarn dev

> cd frontend && yarn && yarn start

### Api Routes

URL = http://localhost:3333

`GET /api/devs`

`PUT /api/devs/:id { "github_username":"", "techs":"", "latitude":"", "longitude":"" }`

`DELETE /api/devs/:id`

`POST /api/devs { "github_username":"", "techs":"", "latitude":"", "longitude":"" }`

`GET /api/search?latitude=&longitude=&techs=`

### TODO

- [x] Mobile App
- [x] Update user (react)
- [x] Launch release v1.0
