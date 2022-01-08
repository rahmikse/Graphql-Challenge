const {ApolloServer,gql} = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const {users,posts,comments} = require("./data");


const typeDefs = gql`
    type User {
        id:ID!
        fullName:String!
        posts:[Post!]!
        comment:[Comments!]!
    },
    type Post {
        id:ID!
        title:String!
        user_id:ID!
        user:User!
        comment:Comments!
        
    },
    type Comments {
        id:ID!
        text:String!
        post_id:ID!
        user:User!
        post:Post!
        
    }
    type Query {
        users:[User!]!
        user(id:ID!):User!

        posts:[Post!]!
        post(id:ID!):Post!

        comments:[Comments!]!
        comment(id:ID!):Comments
    }
`

const resolvers = {
    Query:{
        //Users
        users:()=>users,
        user:(parent,args)=> users.find((user)=>user.id===args.id), 

        //Posts
        posts:()=>posts,
        post:(parent,args)=> posts.find((post)=>post.id===args.id),

        //Comments
        comments:()=>comments,
        comment:(parent,args)=>comments.find((comment)=>comment.id==args.id)
    },
    User:{
        posts:(parent,args)=>posts.filter((post)=>post.user_id==parent.id),
        comment:(parent)=>comments.filter((comment)=>comment.user_id===parent.id)
    },
    Post:{
        user:(parent,args)=>users.find((user)=>user.id===parent.user_id),
        comment:(parent)=>comments.find((comment)=>comment.post_id===parent.id)
    },
    Comments:{
        user:(parent)=>users.find((user)=>user.id===parent.user_id), 
        post:(parent)=>posts.find((post)=>post.id===parent.post_id),
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
      ApolloServerPluginLandingPageGraphQLPlayground({
        // options
      })
    ]
  });

server.listen().then(({url})=>console.log(`Apollo server is up ${url}`))