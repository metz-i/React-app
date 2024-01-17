// (4) create a component
function App() {

    let message = 'Bye there!'
    if (Math.random() > 0.5) {
        message = 'Hello there!';
    }
    return <h1>Hi there</h1>;
    return <input type="number"  />;
    return <h1>{new Date().toLocaleTimeString()}</h1>;
}

export default App;