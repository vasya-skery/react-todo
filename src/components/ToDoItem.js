/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./ToDoItem.css";

class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };

    this.renderForm = this.renderForm.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  toggleState() {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    });
  }
  updateItem() {
    this.props.editToDoItem(
      this.props.index,
      this.title.value,
      this.todo.value
    );
    this.toggleState();
  }

  renderItem() {
    return (
      <div>
        <p className="ToDoItem-Title">{this.props.title}</p>
        <p className="ToDoItem-Text">{this.props.item}</p>
        <button
          className="button buttonDelete"
          onClick={() => this.props.deleteToDoItem(this.props.index)}
        >
          delete
        </button>
        <button
          className="button buttonDelete"
          onClick={() => this.toggleState()}
        >
          edit
        </button>
      </div>
    );
  }

  renderForm() {
    return (
      <div>
        <div className="formItem">
          <div className="div">
            <label htmlFor="">Title</label>
          </div>
          <input
            type="text"
            ref={value => {
              this.title = value;
            }}
            defaultValue={this.props.title}
          />
        </div>
        <div className="formItem">
          <div className="div">
            <label htmlFor="">ToDo</label>
          </div>
          <input
            type="text"
            ref={value => {
              this.todo = value;
            }}
            defaultValue={this.props.item}
          />
        </div>
        <div>
          <button
            className="button buttonDelete"
            type="submit"
            onClick={this.updateItem}
          >
            Update item
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { isEditing } = this.state;
    return (
      <div className="ToDoItem">
        {isEditing ? this.renderForm() : this.renderItem()}
      </div>
    );
  }
}

export default ToDoItem;
