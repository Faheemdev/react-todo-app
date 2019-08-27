import React from "react"
import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends React.Component {

    state = {
        todos: [],
        todoFilter: "all"
    }

    //get todos from localStorage
    componentWillMount() {
        localStorage.getItem('todos') && this.setState({
            todos: JSON.parse(localStorage.getItem('todos'))
        })
    }

    addTodoItem = (todoitem) => {
        // const newTodos = [...this.state.todos]
        this.setState({
            todos: [todoitem, ...this.state.todos]
        })
    }


    //set localStorage
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('todos', JSON.stringify(nextState.todos))
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                //suppose to update the todo 
                if (todo.id === id) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    }
                }
                else {
                    return todo
                }
            })
        })
    }



    //filter function
    filterTodosListItemsOnClick = (str) => {
        this.setState({
            todoFilter: str
        })
    }

    //delete todo item
    deletTodoItem = (id) => {
        this.setState({
            todos: this.state.todos.filter(x => x.id !== id)
        })
    }



    render() {
        let todoslist = []

        if (this.state.todoFilter === "all") {
            todoslist = this.state.todos
        }
        else if (this.state.todoFilter === "active") {
            todoslist = this.state.todos.filter(x => !x.isComplete)
        }
        else if (this.state.todoFilter === "completed") {
            todoslist = this.state.todos.filter(x => x.isComplete)
        }


        return (
            <div>
                <TodoForm onSubmit={this.addTodoItem} />
                <div>
                    <span className="total-todos-counter">Total Todos: {this.state.todos.length}</span>
                    <span className="total-todos-counter">Active Todos: {this.state.todos.filter(x => !x.isComplete).length}</span>
                    <span className="total-todos-counter">Completed Todos: {this.state.todos.filter(x => x.isComplete).length}</span>


                    <button onClick={() => this.filterTodosListItemsOnClick("all")} className={`custom-btn ${this.state.todoFilter === "all" ? "active disabled" : ""}`}>All</button>
                    <button onClick={() => this.filterTodosListItemsOnClick("active")} className={`custom-btn ${this.state.todoFilter === "active" ? "active disabled" : ""}`}>Active</button>
                    <button onClick={() => this.filterTodosListItemsOnClick("completed")} className={`custom-btn ${this.state.todoFilter === "completed" ? "active disabled" : ""}`}>Completed</button>
                </div>
                <ul>
                    {todoslist.map(item => (
                        <Todo
                            key={item.id}
                            todo={item}
                            toggleComplete={() => this.toggleComplete(item.id)}
                            deletTodoItem={() => this.deletTodoItem(item.id)}
                        />
                    ))}
                </ul>

            </div>
        )
    }
}

export default TodoList