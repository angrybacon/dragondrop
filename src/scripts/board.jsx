import React from 'react';
import ReactDOM from 'react-dom';

import Data from './data';
import Header from './header';
import List from './list';

class Board extends React.Component {
  render() {
    const lists = Data.map(
      (list, i) => (
        <List key={i} x={i} title={list.title} candidates={list.candidates} />
      )
    );
    return (
      <div className="h-100 wk-back-background">
        <Header />
        <div className="content h-100">
          <div className="row h-100">{lists}</div>
        </div>
      </div>
    );
  }
}

export function redraw() {  // REVIEW: Is this how we do things?
  ReactDOM.render(<Board />, document.getElementById('root'));
}
export default Board;
