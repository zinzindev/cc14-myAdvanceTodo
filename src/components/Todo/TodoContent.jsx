import * as TodoAPIServices from '../../services/todoServices'

import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

import { TodoHeader } from './TodoHeader';
import { AddTodo } from './AddTodo';
import { TodoLists } from './TodoLists';


export function TodoContent({ todos, setTodos, setTodoFilter }) {
    // # HOOK-AREA : state,Effect,Context
    const sharedObj = useContext(TodoContext)
    console.log("TodoContent", sharedObj)


    const handleEditTodo = async (todoId, updateObj) => {
        // #1 Sync With External State/Service : Database
        // #2 Sync with Internal State : UI State
        // #3 Error Handler eg. modal Error, Sweat Alert

        try {
            // #1 Sync With External State/Service : Database
            // const response = await axios.put(`http://localhost:8080/todos/${todoId}`, updateObj);
            const response = await TodoAPIServices.updateTodo(updateObj)
            const updatedTodoObj = response.data.todo;

            // #2  Sync with Internal State : UI State
            const foundedIndex = todos.findIndex((todo) => todo.id === todoId);
            if (foundedIndex !== -1) {
                const newTodoLists = [...todos];
                // newTodoLists[foundedIndex] = { ...newTodoLists[foundedIndex], ...updatedTodoObj };
                newTodoLists[foundedIndex] = Object.assign({},newTodoLists[foundedIndex],updatedTodoObj)
                setTodos(newTodoLists);
                setTodoFilter(newTodoLists);
            }
        } catch (error) {
            // #3 Error Handler eg. modal Error, Sweat Alert
            console.log(error.response.data);
        }
    };

    const handleDeleteTodo = async (todoId) => {
        // #1 Sync With External State/Service : Database
        // #2 Sync with Internal State : UI State
        // #3 Error Handler eg. modal Error, Sweat Alert
        try {
            // #1 Sync With External State/Service : Database
            // await axios.delete(`http://localhost:8080/todos/${todoId}`)
            await TodoAPIServices.deleteTodo(todoId)

            // #2 Sync with Internal State : UI State
            const newTodoLists = todos.filter((todo) => todo.id !== todoId);
            setTodos(newTodoLists);
            setTodoFilter(newTodoLists)
        } catch (error) {
            // #3 Error Handler eg. modal Error, Sweat Alert
            console.log(error.response.data);
        }
    };

    return (
        <main className='content'>
            <TodoHeader />
            <AddTodo />
            <TodoLists onEditTodo={handleEditTodo} onDeleteTodo={handleDeleteTodo} />
        </main>
    );
}
