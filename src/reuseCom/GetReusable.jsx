import React, {Component} from 'react';
import withReusable from './withReusable';
import './reUse.css';

class GetReusable extends Component {
  state = {  }
  render() { 
    return ( 
        <div className="HOC">
          <br/>
          <h1 className="is-size-4">HOC logic to show a tool tip</h1>
          {this.props.showTooltip && <div>Some Tooltip</div>}
        </div>
     );
  }
}

export default withReusable(GetReusable);