// (1) import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// (2) get a reference to the div w/ ID root
const el = document.getElementById('root');

// (3) tell React to take control of that element
const root = ReactDOM.createRoot(el);

// (4) create a component
//function App() {
//
//    let message = 'Bye there!'
//    if (Math.random() > 0.5) {
//        message = 'Hello there!';
//    }
//    return <h1>Hi there</h1>;
//    return <input type="number"  />;
//    return <h1>{new Date().toLocaleTimeString()}</h1>;
//}
//
function App() {
    return (
        <input placeholder="hi there" />
    )
}
// (5) show the component on the screen
root.render(<App />);
