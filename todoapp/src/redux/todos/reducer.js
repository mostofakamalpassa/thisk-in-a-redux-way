import { initialState } from "./initialState";
import{ADDED, COLORSELECTED, ALLCOMPLETED, CLEARCOMPLETED, DELETED, TOGGLED } from './actionTyps';

const nextTodoId = (todos)=>{
  const maxId = todos?.reduce((maxid, todo)=> Math.max(todo.id, maxid), -1);

   return maxId + 1;

    // console.log('reducter', todos)
}
const todoReducer = (state = initialState, action)=>{
     switch(action.type){
        case ADDED:
            return[
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed:false
                }
            ]
        case TOGGLED:
           return state.map( todo => {
            if(todo.id !== action.payload){
                return todo;
            }
            return {
                ...todo,
                completed: !todo.completed
            }
           })

           case COLORSELECTED:
            const {todoId, color} = action.payload;
            return state.map(todo =>{
                if(todo.id !== todoId){
                    return todo;
                }
                return {
                    ...todo, 
                    color: color
                }
            });

            case DELETED:
           return state.filter(todo => todo.id !== action.payload);

           case ALLCOMPLETED:
                return state.map( todo => {
                    return {
                        ...state,
                        completed: true
                    }
                });

            case CLEARCOMPLETED:
                return state.filter( todo => !todo.completed);
            default:
                return state;
     }
}

export default todoReducer;