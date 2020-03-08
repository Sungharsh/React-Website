import React from 'react';

function withReusable(Component){
    return class withReusable extends React.Component {
        state={showTooltip: false};

        onMouseOver = () => this.setState({showTooltip: true});
        onMouseOut = () => this.setState({showTooltip: false});

        render() { 
            return ( 
                <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                    <Component {...this.props} showTooltip={this.state.showTooltip} />
                </div>
             );
        }
    }
}

export default withReusable;