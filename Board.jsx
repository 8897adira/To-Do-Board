import React from 'react';

const Board = ({ index, task, setTaskList, taskList }) => {
    // Function to handle task deletion
    const handleDelete = () => {
        setTaskList(prevTaskList => prevTaskList.filter((_, i) => i !== index));
    };

    return (
        <div className="border rounded-lg p-4">
            <p>{task}</p>
            <button onClick={handleDelete} className="bg-red-500 text-white py-1 px-3 rounded-lg mt-2">
                Delete
            </button>
        </div>
    );
};

export default Board;
