import React from "react";
import ChildComponent from "./ChildComponent";

class ClassComponent extends React.Component {
  state = {
    name: "Hiep",
    age: "21",
    arrJobs: [
      { id: "1", title: "Developers", salary: "500" },
      { id: "2", title: "Testers", salary: "400" },
      { id: "3", title: "PM", salary: "1000" },
    ],
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          ></input>
          <br></br>
          My name is: {this.state.name}
        </div>
        <ChildComponent
          name={this.state.name}
          age={"21"}
          adress={"ha noi"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default ClassComponent;
