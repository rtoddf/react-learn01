import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';

// import React, {Component} from 'react';

const tasksTitle = 'Photo Wall';

// function Main() {
//     return  <div>
//                 <Title title={tasksTitle}/>
//                 <Photowall posts={posts}/>
//             </div>
// }

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: [{
                id: "0",
                description: "Timothee Chalamet",
                imageLink: "http://www.rtodd.net/images/personality-timothee-chalamet.jpg"
                }, {
                id: "1",
                description: "Tommy Dorfman",
                imageLink: "http://www.rtodd.net/images/personality-tommy-dorfman.jpg"
                }, {
                id: "2",
                description: "Travis Wall",
                imageLink: "http://www.rtodd.net/images/personality-travis-wall.jpg"
                }, {
                id: "3",
                description: "Antoni Porowski",
                imageLink: "http://www.rtodd.net/images/personality-antoni-porowski.jpg"
                }]
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    // remove photo method to be passed down
    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    render() {
        return  <div>
                    <Title title={tasksTitle}/>
                    <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
                </div>
    }
}

export default Main;