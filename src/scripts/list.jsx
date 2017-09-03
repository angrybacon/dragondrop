import React from 'react';

import Candidate from './candidate';

class List extends React.Component {
  render() {
    const candidates = this.props.candidates
          ? this.props.candidates.map((c) => <Candidate key={c.id} data={c} moveFn={this.move} />)
          : [];
    return (
      <div className="h-100 col-6">
        <div className="card wk-back-foreground h-100">
          <div className="card-header d-flex align-items-center"></div>
          <div className="card-body">{candidates}</div>
        </div>
      </div>
    );
  }
}

export default List;
