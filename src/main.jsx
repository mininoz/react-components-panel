var React = require('react');
var ReactDOM = require('react-dom');

var Panel = require('./components/Panel.jsx')
var PanelFooter = require('./components/PanelFooter.jsx')

var Test = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        <Panel
                            amount="100"
                            description="New Follow"
                            colClass="col-md-4"
                        />
                        <Panel amount="$ 1250"
                            description="Average Monthly Income"
                            colClass="col-md-4"
                        />
                        <Panel amount="$ 13865"
                            description="Yearly Income Goal"
                            colClass="col-md-4"
                        />
                        <Panel amount=""
                            description=""
                            colClass="col-md-12"
                            height="200"
                            background="#294F8A">
                            <PanelFooter
                                amount="1000"
                                description="Views"
                            />
                            <PanelFooter
                                amount="1000"
                                description="Like"
                            />
                            <PanelFooter
                                amount="1000"
                                description="Comment"
                            />
                        </Panel>
                    </div>
                </div>
            </div>
        );
    }
})

ReactDOM.render(<Test />, document.getElementById('app'))