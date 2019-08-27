import React from "react"
import { Spring } from 'react-spring/renderprops'

export default (props) => (


    <Spring
        from={{ transform: 'translate3d(0,-13px,0)', opacity: 0 }}
        to={{ transform: 'translate3d(0,0,0)', opacity: 1 }}
        config={{ delay: 200, duration: 300 }}
    >
        {
            animationProps => (
                <div>
                    <div className="foolist" style={animationProps}>
                        <li key={props.id}
                            className={props.todo.isComplete ? "checked" : ""}
                            onClick={props.toggleComplete}>
                            {props.todo.text}
                        </li>
                        <button className="delete" onClick={props.deletTodoItem}>X</button>
                    </div>
                </div>
            )
        }
    </Spring>



)