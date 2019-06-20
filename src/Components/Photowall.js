import React, {Component} from 'react';
import Photo from './Photo';

class Photowall extends Component {
    render() {
        return <div class="photogrid">
            {this.props.posts.map((post, index) => <Photo index={index} post={post}/>)}
        </div>
    }
}

export default Photowall;