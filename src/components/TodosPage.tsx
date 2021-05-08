import React, {FC} from 'react';
import axios from 'axios';

import {ITodo} from '../types/types';
import List from '../components/List';
import TodoItem from '../components/TodoItem';

const TodosPage: FC = () =>{
    const [todos, setTodos] = React.useState<ITodo[]>([])

    React.useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
            setTodos(response.data)
        } catch (error) {
            alert(error)
        }
    }

    return(
        <List 
            items={todos} 
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} 
        />
    )
}

export default TodosPage