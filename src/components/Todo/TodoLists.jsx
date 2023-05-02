import styles from './TodoLists.module.scss';
import { useContext } from 'react'; // #1
import { TodoContext } from '../../contexts/TodoContext'; //#2
import { TodoItem } from './TodoItem';

export function TodoLists() {
    const {todosFilter} = useContext(TodoContext); // #3
   
	

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
