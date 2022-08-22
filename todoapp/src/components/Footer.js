import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {statusChanged,colorChanged} from '../redux/filters/actionCreator';


const numberOfTodos = (no_of_todos)  =>{
    switch(no_of_todos){
        case 0:
            return "0 tasks "
        case 1: 
        return "1 task";
        default:
            return `${no_of_todos} Tasks`;
    }
}

const Footer = () => {
    const todos = useSelector(state => state.todos);
    const remainTodos = todos.filter(todo => !todo.complete).length;
    const dispatch = useDispatch();

    const handleStatusChanged = (status) => {
         dispatch(statusChanged(status));
    }
    const filters = useSelector(state => state.filters)
const {status, colors} = filters;

const handleColorChanged = (color) =>{

    // if(colors?.includes(color)){
    //     dispatch(colorChanged(color, 'removed'));
    // }else{
    //     dispatch(colorChanged(color, 'added'));
    // }
}


    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{numberOfTodos(remainTodos)} left</p>
        <ul className="flex space-x-1 items-center text-xs">
            <li className={`cursor-pointer ${status === "All" && 'font-bold'}`} onClick={()=> handleStatusChanged('All')}>All</li>
            <li>|</li>
            <li className={`cursor-pointer ${status === "Incomplete" && 'font-bold'}`} onClick={()=>handleStatusChanged('Incomplete')}>Incomplete</li>
            <li>|</li>
            <li className={`cursor-pointer ${status === "Complete" && 'font-bold'}`} onClick={() => handleStatusChanged('Complete')}>Complete</li>
            <li></li>
            <li></li>
            <li
                className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
             onClick={handleColorChanged('green')}></li>
            <li
                className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"
                onClick={handleColorChanged('red')}></li>
            <li
                className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"
                onClick={handleColorChanged('yellow')}></li>
        </ul>
    </div>
    );
};

export default Footer;