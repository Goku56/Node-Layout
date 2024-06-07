node typescript template for all best practice including

- prettier
- eslint
- husky
- lint-staged
- jest

Docker commands useful in the development -> To build the image -> 
docker build -t auth-service:dev -f docker/dev/Dockerfile .

-> To run the express server container using the image -> 
docker run -it --rm -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules --env-file ${PWD}/.env -p 5501:5501 -e NODE_ENV=development --name
auth-service auth-service:dev

-> To run the postgres sql database container run this cmd 
docker run --rm --name auth_pg-container -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -v pgdata_mern:/var/lib/postgresql/data -p 5432:5432 -d postgres
    