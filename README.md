# Graphql-Challenge
My first Graphql Challenge 

### Instructions

Clone this repository
### `git clone https://github.com/rahmikse/Graphql-Challenge`

Install dependencies
### `npm install`

Run project
### `npm run dev`
### Open http://localhost:4000/

Query examples 

`
query getAllUsers {
  users {
    id
    fullName
  }
}
`

query getAllPosts {
  posts {
    id
    title
    user_id
    user {
      id
      fullName
    }
  }
}

query getAllComments {
  comments {
    id
    text
    post_id
    user { 
    	id
      fullName
    }
    post { 
    	id
      title
    }
  }
}

query getUser {
  user(id: "1") {
    id
    fullName
    posts {
      id
      title
      user_id
    }
  }
}

query getPost {
  post(id: "1") {
    id
    title
    user_id
    user {
      id
      fullName
      
    }
  }
}

query getComment {
  comment(id: "2") {
    id
    text
    post_id
    user { 
    	id
      fullName
    }
    post { 
    	id
      title
    }
    
  }
}

query { 
	post(id:"1") { 
  	id
    title
    user{ 
    	id
      fullName
    }
    comment { 
    	id
      text
      user{fullName}
    }
  }
}

query {
  user(id: "1") {
    fullName
    posts {
      title
      comment {
        id
        text
      }
    }
  }
}

query {
  user(id: "2") {
    fullName
    comment { 
    	text
    }
  }
}
