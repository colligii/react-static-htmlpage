var React = require('react');

function Counter() {
    const [ counter, setCounter ] = React.useState(0);

    return (
        <div className="react-counter">
            <h1>{counter}</h1>
            <div className="react-counter-action">
                <input type="button" value="Add" onClick={() => setCounter(counter+1)}/>
                <input type="button" value="Remove" onClick={() => {if(counter >= 1) setCounter(counter-1)}}/>
            </div>
        </div>
    );

}

module.exports = Counter;