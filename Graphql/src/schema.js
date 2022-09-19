import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from './resolvers'



const typeDefs = `
    type Query{
        hello: String
        greet(name:String!): String
        tasks: [Task]
    }
    
    type Task {
        _id: ID
        tittle: String!
        descriptions: String!
        number: Int

    }

    type Mutation {
        createTask(input: TaskInput):  Task

    }

    input TaskInput {
        tittle: String!
        descriptions: String!
        number: Int

    }

`;

export default makeExecutableSchema ({
   typeDefs: typeDefs,
   resolvers: resolvers 
});

