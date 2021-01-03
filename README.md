# Docu
Docu is a platform for documenting projects across organizations. Created for a bachelor project in Web Development at UCL University College.

### Development with Docker
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Run `docker compose up --build` in the root of this repository
- The client app will be accessible at [http://localhost:3000/](http://localhost:3000/)
- Run `docker exec -d andreas-kevin-mathias-docu_server_1 npx ts-node ./node_modules/typeorm/cli.js migration:run` in a new terminal window to run migrations inside the server container
