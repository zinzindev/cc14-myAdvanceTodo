import styles from './TodoLists.module.scss';
import { useTodo } from '../../hooks/useTodo';
import { TodoItem } from './TodoItem';

export function TodoLists() {
    const { todosFilter } = useTodo(); // #3

    return (
        <ul className={styles.todoList}>
            {todosFilter?.map((item) => (
                <TodoItem todo={item} key={item.id} />
            ))}
        </ul>
    );
}
