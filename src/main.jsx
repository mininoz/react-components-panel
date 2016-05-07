var React = require('react');
var ReactDOM = require('react-dom');

var Test = React.createClass({
    render: function() {
        return (<div> Hello React </div>);
    }
})

ReactDOM.render(<Test />, document.getElementById('app'))