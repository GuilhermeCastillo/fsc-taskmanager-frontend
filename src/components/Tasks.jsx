import { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const alert = useAlert();

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");

            setTasks(data);
        } catch (error) {
            console.log(error);
            alert.error("Nao foi possivel recuperar as tarefas");
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.iscompleted === false)
                        .map((lastTask) => (
                            <TaskItem task={lastTask} fetchTasks={fetchTasks} />
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>

                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.iscompleted)
                        .map((completedTask) => (
                            <TaskItem
                                task={completedTask}
                                fetchTasks={fetchTasks}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
