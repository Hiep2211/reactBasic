import React from "react";
import { ToastContainer, toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("missing title");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <>
        <div className="add-TOdo">
          <input
            type="text"
            value={title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          />
          <button
            type="button"
            onClick={() => this.handleAddTodo()}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
export default AddTodo;
