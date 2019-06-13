import React from 'react';
import ReactDom from 'react-dom';

// const element = React.createElement('p', null, 'This is the heading');

// const element = React.createElement('ol', null,
//     tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

const tasks = ['bob', 'mark', 'steve'];

const element = (
    <div>
        <h1>Task List</h1>
        <ol>
            {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ol>
    </div>);

ReactDom.render(element, document.getElementById('root'));