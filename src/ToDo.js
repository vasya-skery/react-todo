import React, { Component } from "react";
import { connect } from "react-redux";

import ToDoItem from "./components/ToDoItem";
import { getData } from "./actions/getData";
import { addTodo } from "./actions/addToDo";
import Logo from "./assets/logo.png";

import "./ToDo.css";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          todo: ''
        };
    };

  componentDidMount() {
    console.log(this.props.data);
  }
  createNewToDoItem = (title, todo) => {
    this.props.addTodo(title, todo)
    this.setState({ todo: '',  title: '' })
  };

  handleKeyPress = e => {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        this.createNewToDoItem();
      }
    }
  };

  handleInput = e => {
    this.setState({
      todo: e.target.value
    });
  };
  handleInput2 = e => {
    this.setState({
      title: e.target.value
    });
  };

  deleteToDoItem = id => {
    this.setState({
      list: this.state.list.filter((item, index) => index !== id)
    });
  };

  updateTitle(newTitle) {
    this.setState({
      currentToDoItem: newTitle.target.value
    });
  }

  updateToDo(newToDo) {
    this.setState({
      currentToDoItem: newToDo.target.value
    });
  }

  editToDoItem = (id, newTitle, newToDo) => {
    // console.log(id, newValue);
    var items = this.state.list;
    var item = items[id];
    item["title"] = newTitle;
    item["todo"] = newToDo;
    this.setState({
      items
    });
  };

  render() {
    return (
      <div className="ToDo">
        <img className="Logo" src={Logo} alt="React logo" />
        <h1 className="ToDo-Header">MAGISOFT REACT INTERNSHIP TODO</h1>
        <div className="ToDo-Container">
          <div className="ToDo-Content">
            {this.props.list.map((item, index) => {
              return (
                <ToDoItem
                  key={index}
                  index={index}
                  item={item.todo}
                  title={item.title}
                  deleteToDoItem={this.deleteToDoItem}
                  editToDoItem={this.editToDoItem}
                />
              );
            })}
          </div>

          <div>
            <label htmlFor="todoInput">Todo</label>
            <input
              className="todoInput"
              type="text"
              value={this.state.todo}
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div>
            <label htmlFor="titleInput">Title</label>
            <input
              className="titleInput"
              type="text"
              value={this.state.title}
              onChange={this.handleInput2}
              onKeyPress={this.handleKeyPress}
            />
            <button className="ToDo-Add" onClick={() => this.createNewToDoItem(this.state.title, this.state.todo)}>
              +
            </button>
          </div>
          <div onClick={this.props.getData}>{this.props.data}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.todos.list,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  addTodo: (title, todo) => dispatch(addTodo(title, todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
