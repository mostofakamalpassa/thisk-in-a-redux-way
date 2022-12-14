import React from "react";
// import cancel from '../assets/images/cancel.png'
import Todo from './Todo'
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector(state => state.filters);

  return (
    <div
    className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
>       {
    todos.filter(todo =>{
       const {status} = filters;
       switch(status){
        case 'Complete':
          return todo.completed;

          case "Incomplete":
            return !todo.completed;

          default :
          return true;
       }
    })
    .map(todo => (
        <Todo todo ={todo} key={todo.id} ></Todo>
    ))
}
        
    </div>
  );
};

export default TodoList;
