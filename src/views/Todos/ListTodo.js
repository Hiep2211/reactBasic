import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing Homework" },
      { id: "todo2", title: "Making Video " },
      { id: "todo3", title: "Fixing bugs " },
    ],
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
  };

  render() {
    let { listTodos } = this.state;
    return (
      <div className="List-Todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="Todo-list-content">
          {listTodos.map((item, index) => {
            return (
              <>
                <div className="Todo-child">
                  <span key={item.id}>
                    {index + 1} - {item.title}
                  </span>
                  <button className="Button-toto">Delete</button>
                  <button className="Button-todo">Edit</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
