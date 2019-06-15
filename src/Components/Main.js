import React, {Component} from 'react';
import List from './List';
import Title from './Title';

const tasksTitle = 'To Dos';
const tasks01 = ['Mow the lawn today', 'Walk the dog'];
const tasks02 = ['Hose the driveway', 'Finish the laundry'];

class Main extends Component {
    render() {
        return  <div>
                    <Title title={tasksTitle}/>
                    <List tasks={tasks01}/>
                    <List tasks={tasks02}/>
                </div>
    }
}

export default Main;