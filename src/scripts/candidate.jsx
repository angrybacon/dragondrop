import {DragSource} from 'react-dnd';
import React from 'react';

import Types from './types';

class Candidate extends React.Component {
  render() {
    const {connectDragSource, isDragging} = this.props;
    return connectDragSource(
      <div className="card candidate mb-3"
           style={{opacity: isDragging ? .8 : 1, cursor: 'move'}}>

        <div className="card-body d-flex align-items-center">
          <img className="candidate-avatar rounded-circle"
               src={this.props.data.avatar} alt="Avatar of {this.props.data.name}" />
          <div className="d-flex flex-column mx-3">
            <h5>{this.props.data.name}</h5>
            <div className="text-muted">{this.props.data.occupation}</div>
          </div>
          <button className="btn bmd-btn-icon align-self-start ml-auto text-muted">
            {/* XXX: BMD icon class doesn't work well with sized buttons. */}
            {/*      See https://github.com/FezVrasta/bootstrap-material-design/issues/1213 */}
            <small className="mdi mdi-bell"></small>
          </button>
        </div>

        <div className="card-footer d-flex align-items-center">
          {/* NOTE: BS badge pills are not currently supported by BMD. */}
          <div className="wk-pill wk-back-accent">{this.props.data.rating}</div>
          <div className="w-100 d-flex align-items-center ml-3 text-muted">
            <div>
              <button className="btn bmd-btn-icon mr-3">
                <small className="mdi mdi-thumb-up"></small>
              </button>
              0
            </div>
            <div className="ml-3">
              <button className="btn bmd-btn-icon mr-3">
                <small className="mdi mdi-message"></small>
              </button>
              0
            </div>
            <div className="ml-3">
              <button className="btn bmd-btn-icon mr-3">
                <small className="mdi mdi-email"></small>
              </button>
              0
            </div>
            <div className="ml-auto"><em>last year</em></div>
          </div>
        </div>
      </div>
    );
  }
}

const dragSource = {
  beginDrag(props) {
    return props;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export default DragSource(Types.CANDIDATE, dragSource, collect)(Candidate);
