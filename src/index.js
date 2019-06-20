import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main';
import './css/styles.css';

// const element = React.createElement('p', null, 'This is the heading');

// const element = React.createElement('ol', null,
//     tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

// const element = (
//     <div>
//         <h1>Task List</h1>
//         <ol>
//             {tasks.map((task, index) => <li key={index}>{task}</li>)}
//         </ol>
//     </div>);

// const tasks = ['bob', 'mark', 'steve'];

ReactDom.render(<Main/>, document.getElementById('root'));