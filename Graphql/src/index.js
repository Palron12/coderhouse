import express from "express";
import { graphqlHTTP } from "express-graphql";
import morgan from "morgan";
import schema from './schema'


const app = express();

app.use(morgan('dev'))

app.get('/', (req, res) =>{
    res.json({
        message: 'Hello World!!'
    })
});

app.use ('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(process.env.PORT || 4000, () => {
    console.log("Server on port 4000");
  });

