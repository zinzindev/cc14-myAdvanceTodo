import styles from './TodoLists.module.scss';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { TodoItem } from './TodoItem';

export function TodoLists() {
    const sharedObj = useContext(TodoContext);
    const todosFilter = sharedObj.todosFilter;
	// const {todosFilter} = useContext(TodoContext);

    return (
        <ul className={styles.todoList}>
            {todosFilter?.map((item) => (
                <TodoItem
                    todo={item}
                    key={item.id}
                />
            ))}
        </ul>
    );
}
