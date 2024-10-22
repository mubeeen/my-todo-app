import React from 'react';

interface TodoProps {
  
}

const Todo: React.FC<TodoProps> = ({}) => {
  return (
    <div>
        <div className="flex bg-gray-100 p-4 justify-center">
            <div className="p-6 text-center">
                <h1 className="text-2xl text-black">My Todo Application</h1>
            </div>
        </div>
        <div className="max-w-sm md:max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 md:my-20"> 
            <div className="p-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center py-4"> Create Task </h2> 
            </div>
            <div className="max-w-lg mx-auto my-4 p-4"> 
                <div className='py-2'>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Task Name</label>
                    <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter your task..."
                        required
                    />
                </div>
                <div className='py-2'>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your task description here..."></textarea>
                </div>
                <div className='py-2'>
                    
                </div>
            </div>
        </div>
    </div>



  )
}

export default Todo;