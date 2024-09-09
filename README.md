# CI/CD project for the Universidad de Palermo DevOps class


This is the backend layer for an application I'm building for the DevOps class. It's a Node.js CRUD API using the Express.js framework, completely written in TypeScript and then transpiled to plain JavaScript. The objective is to build a CI/CD pipeline so that the app can be unit-tested, then dockerized, then its docker image pushed to a public docker registry [pending link here]. Afterwards, the image should be pulled from that docker registry and deployed into a PaaS solution like Render, DigitalOcean, Vercel, etc.

You can...

## Run this project locally

1. Clone the repository: `git clone https://github.com/fedoteh/pet-manager-backend.git`
2. Install dependencies: `npm install`
3. Test the app: `npm test`
4. Build the app: `npm build`
4. Start the server from the transpiled JavaScript files: `npm start`

Or...

## (Recommended) Run a dockerized version of this project

1. //Pending instructions

## Usage

Once the server is running, you can access the API endpoints to perform various operations related to pet management. Here are some examples:

- GET `/pets/dogs` - Retrieve a list of all dogs
- GET `/pets/dogs/:id` - Retrieve a specific dog by ID
- GET `/pets/cats` - Retrieve a list of all cats
- GET `/pets/cats/:id` - Retrieve a specific cat by ID


## License

This project is licensed under the [MIT License](./LICENSE).
