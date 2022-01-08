const {ApolloServer,gql} = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const users = [
    {
        id:"1",
        fullName:"Rahmi",
    },
    {
        id:"2",
        fullName:"Serhat",
    },
   
];

const posts = [
    {
        id:"1",
        title:"Rahminin Gönderisi",
        user_id:"1"
    },
    {
        id:"2",
        title:"Rahminin diğer Gönderisi",
        user_id:"1"
    },
    {
        id:"3",
        title:"Serhatın Gönderisi",
        user_id:"2"
    }
];

const comments = [
    {
        id:"1",
        text:"Serhat yorumu",
        post_id:"1",
        user_id:"2"
    },
    {
        id:"2",
        text:"Serhat Yorumu 2",
        post_id:"2",
        user_id:"2"
    },
    {
        id:"3",
        text:"Rahmi Yorumu",
        post_id:"3",
        user_id:"1"
    }
];

module.exports = {
    users,
    posts,
    comments
}