import React from 'react';

import {DragDropContext, DropTarget} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Data from './data';
import Candidate from './candidate';
import Types from './types';

function move(candidate, newX) {
  Data[candidate.x].candidates.splice(candidate.y, 1);
  Data[newX].candidates.push(candidate.data);
}

class List extends React.Component {
  render() {
    const {x, connectDropTarget} = this.props;
    const candidates = this.props.candidates
          ? this.props.candidates.map(
            (c, i) => <Candidate key={c.id} x={x} y={i} data={c} />
          )
          : [];
    return connectDropTarget(
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

const dragTarget = {
  drop(props, monitor) {
    move(monitor.getItem(), props.x);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

export default DragDropContext(HTML5Backend)(
  DropTarget(Types.CANDIDATE, dragTarget, collect)(List)
);
