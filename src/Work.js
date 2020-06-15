import React from 'react';

export default class Work extends React.Component {
	render() {
  	const p = this.props;
  	return (
    	
        
    	 <div className="descinfo">
          <div style = {{fontSize:12}}>{p.login}</div>
          
          
        </div>
    	
    );
  }
}