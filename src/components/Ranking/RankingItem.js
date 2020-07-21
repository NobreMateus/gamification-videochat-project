import React from 'react';
import './Ranking.css';

class RankingItem extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="raking-item">
          <div className="pos-number">{this.props['position']}</div>
          <div className="name">{this.props['name']}</div>
          <div className="points">{this.props['points']} pts</div>
      </div>
    );
  }

}

export default RankingItem;