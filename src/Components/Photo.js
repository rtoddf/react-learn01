import React from 'react';
import { METHODS } from 'http';

function Photo(props) {
    const post = props.post;
    return <figure className="figure">
        <img src={post.imageLink} alt={post.description}/>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button className="remove-button">Remove</button>
        </div>
    </figure>
}

// if all your component has is a render METHOD, you can use a function

// class Photo extends Component {
//     render(){
//         const post = this.props.post;
//         return <figure className="figure">
//             <img src={post.imageLink} alt={post.description}/>
//             <figcaption><p>{post.description}</p></figcaption>
//             <div className="button-container">
//                 <button className="remove-button">Remove</button>
//             </div>
//         </figure>
//     }
// }

export default Photo;