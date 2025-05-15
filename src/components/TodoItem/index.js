// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-card-container">
      <p className="todo-title">{title}</p>
      <button className="delete-button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
