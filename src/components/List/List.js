import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from '../Action';

const List = (props) => {
    return (
        <ul>
            {
                props.todos.map((todo, index) => 
                <li key={index}>
                    {todo.message}

                    <button onClick={() =>props.dispatch(deleteTodo(todo.id))}>Delete</button>
                </li>)
            }
        </ul>
    );
};

const mapStateToProps = state =>({
    todos: state.Todos.data,
});

export default connect(mapStateToProps)(List);