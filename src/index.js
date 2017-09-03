import React from 'react';
import ReactDOM from 'react-dom';

import Header from './scripts/header';
import List from './scripts/list';

import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import 'mdi/css/materialdesignicons.css';
import './index.css';

class Application extends React.Component {
  render() {
    return (
      <div className="h-100 wk-back-background">
        <Header />
        <div className="content h-100">
          <div className="row h-100">
            <List title="A Rencontrer" />
            <List title="Entretien" />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('root'));
