import React, {Component} from 'react';

class Photo extends Component {
    render(){
        const post = this.props.post;
        return <figure class="figure">
            <img src={post.imageLink}/>
            <p>description: {post.description}</p>
        </figure>
    }
}

export default Photo;