import React, { Component } from 'react'
const axios =  require("axios");


class Posts extends Component {

        constructor(props){
            super(props);
            this.state = {
                posts : []
            }
        }
        UNSAFE_componentWillMount (){
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get'
          })
          .then(res=>{
              console.log(res.data);
              this.setState({posts : res.data});
          })
    }
    render() {
        const postItems = this.state.posts.map(post => (
            <div key = {post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

export default Posts;
