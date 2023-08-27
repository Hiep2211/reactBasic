import React from "react";

class AddTodo extends React.Component {
  handleAddList = () => {};

  render() {
    return (
      <>
        <div className="add-TOdo">
          <input type="text" />
          <button
            type="button"
            onClick={() => this.handleAddList()}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
export default AddTodo;
