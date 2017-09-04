import React from 'react';

import Candidate from './candidate';

class List extends React.Component {
  render() {
    const candidates = this.props.candidates
          ? this.props.candidates.map((c) => <Candidate key={c.id} data={c} />)
          : [];
    return (
      <div className="h-100 col-6">
        <div className="card wk-back-foreground h-100">
          <div className="card-header d-flex align-items-center">
            <div>{this.props.title}</div>
            <div className="wk-pill wk-back-secondary ml-3">{candidates.length}</div>
          </div>
          <div className="card-body scroll-y">{candidates}</div>
        </div>
      </div>
    );
  }
}

export default List;
