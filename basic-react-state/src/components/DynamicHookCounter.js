import React, { useState } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import { dynamicCounterDecrement, dynamicCounterIncrement } from '../redux/dynamicCounter/actionCreators';




const DynamicHookCounter = ({id}) => {
    const count = useSelector(state => state.dynamicCounter.value);
    const dispatch = useDispatch();

    const incrementHandler = (value) =>{
        dispatch(dynamicCounterIncrement(value));
    }

    const decrementHandler = (value) => {
        dispatch(dynamicCounterDecrement(value));
    }

    return (
        <div className="w-screen  p-10 bg-gray-100 text-slate-700">
    
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
            Simple Counter Application
        </h1>

     
        <div className="max-w-md mx-auto mt-10 space-y-5">
            <div
                className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
            >
                <div className="text-2xl font-semibold">{count}  id = {id}</div>
                <div className="flex space-x-3">
                    <button
                        className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        
                        // onClick={handleCounterIncrement}
                        onClick={() =>incrementHandler(5)}
                    >
                        Increment
                    </button>
                    <button
                        className="bg-red-400 text-white px-3 py-2 rounded shadow"
                        // onClick={handleCounterDecrement}
                        onClick={()=>decrementHandler(3)}
                    >
                        Decrement
                    </button>
                </div> 
            </div>
        </div>
    </div>
    );
};

export default DynamicHookCounter;


