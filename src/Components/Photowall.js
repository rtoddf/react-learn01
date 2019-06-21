import React from 'react';
import Photo from './Photo';

// import React, {Component} from 'react';

function Photowall(props) {
    return <div className="photogrid">
        {props.posts.map((post, index) => <Photo key={index} post={post}/>)}
    </div>
}

// class Photowall extends Component {
//     render() {
//         return <div className="photogrid">
//             {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
//         </div>
//     }
// }

export default Photowall;