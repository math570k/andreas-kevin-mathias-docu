import { SectionResolver } from './resolvers/SectionResolver';
import { ProjectResolver } from './resolvers/ProjectResolver';
/* eslint-disable no-console */
import "reflect-metadata";
import express from "express";
import {ApolloServer} from "apollo-server-express";
import { buildSchema } from "type-graphql";
import {UserResolver} from "./resolvers/UserResolver";
import { PageResolver } from './resolvers/PageResolver';
import { OrganizationResolver } from './resolvers/OrganizationResolver';
import { createConnection } from "typeorm";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { createAccessTokenFromRefreshToken, removeRefreshToken } from "./helpers/auth";

const PORT = 8000;

(async () => {
    /*
     * Define app as an express application
     */
    const app = express();

    /*
     * Express Middleware
     */
    app.use(cookieParser());

    /*
     * Setup route for refresh tokens
     */
    app.post("/refresh_token", createAccessTokenFromRefreshToken);

    /*
    * Logout route that removes cookie
    */
    app.post("/remove_refresh_token", removeRefreshToken);

    /*
     * Create database connection
     * Connection info defined in ormconfig.json
     */
    await createConnection();

    /*
     * Setup Apollo Server
     */
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                UserResolver, 
                OrganizationResolver, 
                PageResolver, 
                ProjectResolver, 
                SectionResolver
            ],
            validate: false
        }),
        context: ({ req, res }) => ({ req, res })
    });
    apolloServer.applyMiddleware({ app });

    /*
     * Run the application
     */
    app.listen(PORT, () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        console.log(`Server running on port ${PORT}`!);
    });
})();
