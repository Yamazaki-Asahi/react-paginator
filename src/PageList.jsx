import React from 'react';

class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return <ul className="page-list">
      <li className="is-current">ページ1</li>
      <li>ページ2</li>
      <li>ページ3</li>
      <li>ページ4</li>
      <li>ページ5</li>
    </ul>
  }
}

export default Paginator;

