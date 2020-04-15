import React, { Component } from "react";
import NavBar from "./components/navbar";
import Main2ndheaderpage from "./components/secondheaderpage";
//import Maingrid from "./components/gridpage";

class App extends Component {
  state = {
    initcounters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const initcounters = [...this.state.initcounters];
    const index = initcounters.indexOf(counter);
    initcounters[index] = { ...initcounters[index] };
    initcounters[index].value++;
    this.setState({ initcounters });
  };

  handleDecrement = (counter) => {
    const initcounters = [...this.state.initcounters];
    const index = initcounters.indexOf(counter);
    initcounters[index] = { ...initcounters[index] };
    initcounters[index].value--;
    this.setState({ initcounters });
  };

  handleReset = () => {
    const initcounters = this.state.initcounters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ initcounters });
  };

  handleDelete = (counterId) => {
    const initcounters = this.state.initcounters.filter(
      (c) => c.id !== counterId
    );
    this.setState({ initcounters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <NavBar
          totalCounters={
            this.state.initcounters.filter((c) => c.value > 0).length
          }
        />
        <main className="container">
          <Main2ndheaderpage
            initcounters={this.state.initcounters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
          />
        </main>
      </div>
    );
  }
}

export default App;
