import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 md:p-8 rounded shadow-2xl w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          <i className="fas fa-plus text-purple-600 mr-2"></i>Create New Task
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea className="w-full px-3 py-2 border rounded"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Date</label>
            <input type="date" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Status</label>
            <select className="w-full px-3 py-2 border rounded">
              <option value="" disabled selected>
                Select here
              </option>
              <option value="todo">TODO</option>
              <option value="in-progress">IN PROGRESS</option>
              <option value="completed">COMPLETED</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Priority</label>
            <select className="w-full px-3 py-2 border rounded">
              <option value="" disabled selected>
                Select here
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
