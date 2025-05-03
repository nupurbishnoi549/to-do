import { useState } from "react";

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setTasks([...tasks, { text: input, done: false }]);
            setInput("");
        }
    };

    const toggleDone = (index) => {
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
                <h1 className="text-4xl font-bold text-center mb-6 text-black">To-Do List</h1>

                <form onSubmit={addTask} className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add a task..."
                        className="p-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-black"
                    />
                    <button
                        type="submit"
                        className="text-black border border-black px-5 py-2.5 rounded-xl bg-transparent hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer shadow-sm hover:shadow-md"
                    >
                        Add
                    </button>
                </form>

                {tasks.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg">No tasks</p>
                ) : (
                    <ul className="space-y-3">
                        {tasks.map((task, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                       type="checkbox"
                                        checked={task.done}
                                        onChange={() => toggleDone(index)}
                                        className="w-5 h-5 text-purple-600"
                                    />
                                    <span className={`text-lg ${task.done ? "line-through text-gray-400" : "text-gray-800"}`}>
                                        {task.text}
                                    </span>
                                </div>
                                <button
                                    onClick={() => deleteTask(index)}
                                    className="text-red-500 hover:text-red-700 font-bold text-xl"
                                    title="Delete"
                                >
                                    ✖
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
