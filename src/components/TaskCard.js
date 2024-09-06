import React, { useState, useEffect } from 'react';

const TaskCard = ({ priority, title, description, date }) => {
    const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

    const toggleStatusModal = () => {
        setIsStatusModalOpen(!isStatusModalOpen);
    };

    const closeStatusModal = () => {
        setIsStatusModalOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isStatusModalOpen && !event.target.closest('.status-modal')) {
                closeStatusModal();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isStatusModalOpen]);

    return (
        <div className="relative mb-4">
            <div className="flex justify-between items-center mb-2">
                <span className={`px-2 py-1 rounded text-xs ${priority === 'High' ? 'bg-red-200 text-red-600' : priority === 'Medium' ? 'bg-pink-200 text-pink-600' : 'bg-green-200 text-green-600'}`}>{priority}</span>
                <i className="fas fa-ellipsis-v cursor-pointer" onClick={toggleStatusModal}></i>
            </div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="flex items-center mt-2 text-gray-500">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>{date}</span>
            </div>

            {isStatusModalOpen && (
                <div className="absolute top-0 right-0 mt-8 bg-white p-4 rounded shadow-2xl w-48 z-10 status-modal">
                    <h2 className="text-lg font-bold mb-2">Change Status</h2>
                    <hr className="border-purple-200 mb-2"/>
                    <ul>
                        <li className="cursor-pointer hover:bg-gray-200 p-2 rounded border-b border-gray-300" onClick={closeStatusModal}>Todo</li>
                        <li className="cursor-pointer hover:bg-gray-200 p-2 rounded border-b border-gray-300" onClick={closeStatusModal}>In Progress</li>
                        <li className="cursor-pointer hover:bg-gray-200 p-2 rounded" onClick={closeStatusModal}>Completed</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TaskCard;
