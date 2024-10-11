## CI/CD project for the Universidad de Palermo DevOps class


This is the backend layer for an application I'm building for the DevOps class. It's a Node.js CRUD API using the Express.js framework, completely written in TypeScript and then transpiled to plain JavaScript. The objective is to build a CI/CD pipeline so that the app can be unit-tested, then dockerized, then its docker image pushed to a public docker registry [pending link here]. Afterwards, the image should be pulled from that docker registry and deployed into a PaaS solution like Render, DigitalOcean, Vercel, etc.

### Prerequisites

- `Git` to clone this repo.
- `Node >= 20`
- `npm` to manage dependencies.
- `Docker Desktop` — must have docker compose v2 (just update Docker Desktop and it should be good).
- `Make` to easily manage docker compose commands — on Windows, can be installed with Chocolatey.

There are two options:

You can...

### a. Run this project locally

1. Clone the repository: `git clone https://github.com/fedoteh/pet-manager-backend.git`
2. Install dependencies: `npm install`
3. Build the app: `npm run build`
4. Start the server from the transpiled JavaScript files: `npm start`

Or...

### b. (Recommended) Run a dockerized version of this project

Sit on the root directory and run:

- `make up-dev` if you want to start docker compose with development capabilities (nodemon).
- `make test` if you want to run the integration tests (these also run on the CI on pushes to the `main` branch).
- `make up-prod` if you want to start the dockerized app from its production build without additional dev tools.

### Usage

Once the server is running, you can access the API endpoints on `localhost:3000/` to perform various operations related to pet management. A postgres DB will be initiated with some data for testing purposes.

Example operations for dogs:

- GET `api/v1/pets/dogs` - Retrieve a list of all dogs
- GET `api/v1/pets/dogs/:id` - Retrieve a specific dog by ID
- POST `api/v1/pets/dogs` - Create a new dog
- PUT `api/v1/pets/dogs/:id` - Update a dog attribute/s by ID (1, 2 and 3 are default dogs)

Example operations for cats:

- GET `api/v1/pets/cats` - Retrieve a list of all cats
- GET `api/v1/pets/cats/:id` - Retrieve a specific cat by ID
- POST `api/v1/pets/cats` - Create a new cat
- PUT `api/v1/pets/cats/:id` - Update a cat attribute/s by ID (4, 5 and 6 are default cats)

### TODO

- Implement a monitoring tool (New Relic, Sentry).
- Create a SaaS DB.
- Connect to the productive DB based on context — dev env should use the docker-compose-defined postgres.
- Write a report and export to PDF to present the project @ School.
- Finish coding the test suite to cover all the operations on the two initial endpoints.


### License

This project is licensed under the [MIT License](./LICENSE).
