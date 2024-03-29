import { TodoItem } from '../components';
import './TodoList.css';

export default function TodoList({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </div>
  );
}
