import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';

import antoni from '../images/antoni.jpg';
import timothe from '../images/timothe.jpg';
import tommy from '../images/tommy.jpg';
import travis from '../images/travis.jpg';

const tasksTitle = 'Photo Wall';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: [
                {
                    id: "0",
                    description: "Timothee Chalamet",
                    imageLink: timothe
                }, {
                    id: "1",
                    description: "Tommy Dorfman",
                    imageLink: tommy
                }, {
                    id: "2",
                    description: "Travis Wall",
                    imageLink: travis
                }, {
                    id: "3",
                    description: "Antoni Porowski",
                    imageLink: antoni
                }
            ]
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