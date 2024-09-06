import React, { useState } from 'react';
import TaskCard from './components/TaskCard.js';
import Modal from './components/Modal.js';
import logo from './components/logo.png';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="p-4 md:p-10">
            <header className="flex justify-between items-center mb-8 bg-white p-4 rounded shadow -mx-4 md:-mx-8 -mt-4 md:-mt-8">
                <div className="text-2xl font-bold">
                    <img src={logo} alt="Board Infinity Logo" className="inline-block mr-2 w-20 h-15" />
                </div>
            </header>
            <div className="ml-12 mr-12 pt-7 bg-white p-2 md:p- rounded shadow-lg mb-10">
                <main className="mx-4 md:mx-16">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl md:text-3xl font-bold">Desktop & Mobile Application</h1>
                        <button onClick={openModal} className="bg-purple-600 text-white px-4 py-2 rounded item-center">
                            <i className="fas fa-plus mr-2"></i>Create Task
                        </button>
                    </div>
                </main>
            </div>
            <div className="ml-12 mr-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="shadow-lg rounded p-4">
                    <h2 className="bg-purple-600 text-white text-center py-2 rounded-t">TODO</h2>
                    <div className="bg-white p-4 rounded-b shadow-lg">
                        <TaskCard priority="High" title="Brainstorming" description="Brainstorming brings team members' diverse experience into play." date="18/09/2024" />
                        <TaskCard priority="High" title="Wireframes" description="Low fidelity wireframes include the most basic content and visuals." date="18/09/2024" />
                    </div>
                </div>
                <div className="shadow-lg rounded p-4">
                    <h2 className="bg-yellow-500 text-white text-center py-2 rounded-t">IN PROGRESS</h2>
                    <div className="bg-white p-4 rounded-b">
                        <TaskCard priority="Low" title="Onboarding Illustrations" description="" date="18/10/2024" />
                    </div>
                </div>
                <div className="shadow-lg rounded p-4">
                    <h2 className="bg-green-600 text-white text-center py-2 rounded-t">COMPLETED</h2>
                    <div className="bg-white p-4 rounded-b">
                        <TaskCard priority="Medium" title="Design System" description="It just needs to adapt the UI from what you did before" date="12/10/2024" />
                    </div>
                </div>
            </div>

            {isModalOpen && <Modal closeModal={closeModal} />}
        </div>
    );
};

export default App;
