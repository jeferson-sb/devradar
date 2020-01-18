# DevRadar

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

`PUT /api/devs/:id`

`DELETE /api/devs/:id`

`POST /api/devs { "github_username":"", "techs":"", "latitude":"", "longitude":"" }`

`GET /api/search?latitude=&longitude=&techs=`

### TODO

- [x] Mobile App
- [ ] Update user (react)

## Version

1.0.2
