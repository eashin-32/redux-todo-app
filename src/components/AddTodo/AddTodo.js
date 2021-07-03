import React from 'react';
import { connect } from 'react-redux';
import { addTodo} from '../Action';

const AddTodo = (props) => {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                let input = event.target.userInput.value;
                props.dispatch(addTodo(input))
                
                event.target.userInput.value = '';
            }}>
                <input type="text" name='userInput'/>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default connect()(AddTodo);