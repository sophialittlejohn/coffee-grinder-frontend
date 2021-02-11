# Development

## Frontend

The frontend is built with React, Nextjs, Apollo Client and Typescript.

Run `yarn dev` to start the development server.

Run `yarn build` and `yarn start` to create a production build and to run it.

Visit http://localhost:3000.

### Firebase Storage for pictures

Picture are stored in [Firebase Storage](https://console.firebase.google.com/project/coffee-grindr/storage/coffee-grindr.appspot.com/files)

## Backend

Prisma serves the GraphQL API in a docker container locally.

Navigate to the folder: `cd server/`

To spin up the docker container run `docker-compose up`. This will build and run the backend container and the container holding the postgres db.

The GraphQL playground should be available at http://localhost:4000.
