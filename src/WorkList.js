import React from 'react';
import './WorkList.scss';
import Work from "./Work";

export default class WorkList extends React.Component {
    render() {
        const p = this.props;
        return (
            <div className="desclist">
            <span className="desclisttext">WorkList</span>
            {p.descarray.map(descinfo => <Work key={descinfo.id} {...descinfo}/>)}
            </div>
        );
    }
  }