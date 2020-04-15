import React, { Component } from "react";
import Maingrid from "./gridpage";

class Main2ndheaderpage extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      initcounters,
      onRestart,
    } = this.props;
    return (
      <div>
        <button
          className="btn btn-success m-2"
          onClick={onReset}
          disabled={initcounters.length === 0 ? "disabled" : ""}
        >
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={onRestart}
          disabled={initcounters.length !== 0 ? "disabled" : ""}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>
        {initcounters.map((countermap) => (
          <Maingrid
            key={countermap.id}
            counter={countermap}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Main2ndheaderpage;
