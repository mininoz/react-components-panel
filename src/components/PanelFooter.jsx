var React = require('react')
var Component = React.Component

class PanelFooter extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                <h1>{this.props.amount}</h1>
                <div className="text-muted">{this.props.description}</div>
            </div>
            )
    }
}

module.exports = PanelFooter;