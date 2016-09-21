import React from 'react';

var style = {
    color: '#08c',
    cursor: 'pointer'
}


var TruncateText = React.createClass({
    propTypes: {
      text: React.PropTypes.string,
      maxLength: React.PropTypes.number
    },
    
    getDefaultProps: function() {
      return {
        maxLength: 255,
        showLess: 'Show less...',
        showMore: 'Show more...'
      }
    },
    
    getInitialState: function() {
      return {
        text: this.props.text,
        cropped: true
      }
    },
    
    handleToggleText: function() {
      this.setState({cropped: !this.state.cropped})
    },
    renderToggleText: function() {
        
    },
    
    renderText: function() {
      var maxLength = this.props.maxLength;
      var content, toggleText;
      if(this.state.text.length <= maxLength) {
        return (
          <p>
            {this.state.text}
          </p>
        );
      }
      if(this.state.text.length > maxLength && this.state.cropped) {
        content = this.state.text.substring(0, maxLength);
        toggleText = this.props.showMore;
      } else {
        content = this.state.text;
        toggleText = this.props.showLess;
      }
      return(
        <p>
          {content}
          <span style={style} onClick={this.handleToggleText}>{toggleText}</span>
        </p>  
        );
    },
    
    render: function() {
        return (<div>{this.renderText()}</div>);  
    }
  
});

export default TruncateText;