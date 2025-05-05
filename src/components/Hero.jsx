import React, { useState, useEffect } from "react";

 function App() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("userTodoData");
        return saved ? JSON.parse(saved) : [];
    });
    const [input, setInput] = useState("");

    useEffect(() => {
        localStorage.setItem("userTodoData", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setTasks([...tasks, { text: input.trim(), done: false }]);
            setInput("");
        }
    };

    const deleteTask = (index) => {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
                <h1 className="text-4xl font-bold text-center mb-6 text-black">To-Do List</h1>
                <form onSubmit={addTask} className="flex gap-2 mb-6">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                        placeholder="Add task" className="p-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-black"
                />
                    <button type="submit" className="text-black border border-black px-5 py-2.5 rounded-xl bg-transparent hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer shadow-sm hover:shadow-md"
                    >Add</button>
            </form>
                {tasks.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg">No tasks</p>
                ) : (
                        <ul className="space-y-3">
                {tasks.map((task, index) => (
                    <li key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                       <span className={`text-lg`}>
                                        {task.text}
                                    </span>
                        <button onClick={() => deleteTask(index)} className="font-bold text-xl">✖</button>
                    </li>
                ))}
                        </ul>
                )}
                </div>
        </div>
    );
 }
export default App
