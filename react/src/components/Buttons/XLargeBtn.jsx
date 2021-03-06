import React from 'react';


export const XLargeBtn = ({label, handleClick}) => {
    return (
        <button
        type="button"
        className="h-15 w-48 p-2 text-xl text-blue-600 transition-colors duration-150 bg-gray-300 rounded-lg focus:shadow-outline hover:bg-gray-400"
        onClick={handleClick}
        >{label}
        </button>
    )
}