import React from "react"
import Shortid from 'shortid'

const initialState = {
    text: "",
    errorMasg: ""
}

class TodoForm extends React.Component {

    state = initialState

    validateSearchInput = () => {
        let errorMasg = ""

        if (!this.state.text) {
            errorMasg = "*Required"
        }

        if (errorMasg) {
            this.setState({ errorMasg })
            return false
        }

        return true
    }

    addNewTodoList = (event) => {
        event.preventDefault()
        const isValid = this.validateSearchInput()

        if (isValid) {
            //add new todo in list
            this.props.onSubmit({
                id: Shortid.generate(),
                text: this.state.text,
                isComplete: false
            })

            this.setState(initialState)
        }
    }

    handleTodoChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.addNewTodoList}>
                <span className="error-masg">{this.state.errorMasg}</span>
                <input placeholder="Add todo items" type="text"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleTodoChange}
                />
            </form>
        )
    }
}

export default TodoForm