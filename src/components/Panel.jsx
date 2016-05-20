var React = require('react')
var Component = React.Component

class List extends Component {
    render() {
        var divStyle = {}
        var divStylePanel = {}
        var divStyleFooter = {
            background: '#333',
            color: 'white',
            borderTop: 'none',
        }

        this.props.background ? divStyle.background = this.props.background :'';
        this.props.height ? divStylePanel.height = this.props.height :'';

        return (
            <div className={this.props.colClass}>
                <div className="panel panel-defatul" style={divStyle}>
                    <div className="panel-body" style={divStylePanel}>
                        <h1>{this.props.amount}</h1>
                        <div className="text-muted">{this.props.description}</div>
                    </div>

                    { this.props.children ?
                        <div className="panel-footer" style={divStyleFooter}>
                            <div className="row">
                                {this.props.children}
                            </div>
                        </div>
                        : null
                    }

                </div>
            </div>
        )
    }
}

module.exports = List;