import React from 'react';

class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handlePrev(e) {

  }

  render() {
    return <div className="paginator">
        <button className="fa fa-angle-double-left" disabled></button>
        <button className="fa fa-angle-left" disabled></button>
        <span className="current-page"><span id="current-page-num">1</span> / 5ページ</span>
        <button className="fa fa-angle-right"></button>
        <button className="fa fa-angle-double-right"></button>
      </div>
  }
}

export default Paginator;

