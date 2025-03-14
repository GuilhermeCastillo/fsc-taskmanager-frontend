import "./TaskItem.scss";
import axios from "axios";

import { AiFillDelete } from "react-icons/ai";
import { useAlert } from "react-alert";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();

    const handleTaskDeletion = async () => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${task._id}`);
            await fetchTasks();

            alert.success("a tarefa foi removida com sucesso");
        } catch (error) {
            alert.error("algo deu errado");
        }
    };

    const handleTaskCompletionChange = async (e) => {
        try {
            await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
                iscompleted: e.target.checked,
            });

            await fetchTasks();

            alert.success("a tarefa foi modificada com sucesso");
        } catch (error) {
            alert.error("algo deu errado");
        }
    };

    return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label
                        className={
                            task.iscompleted
                                ? "checkbox-container-completed"
                                : "checkbox-container"
                        }
                    >
                        {task.description}
                        <input
                            type="checkbox"
                            defaultChecked={task.iscompleted}
                            onChange={(e) => handleTaskCompletionChange(e)}
                        />
                        <span
                            className={
                                task.iscompleted
                                    ? "checkmark completed"
                                    : "checkmark"
                            }
                        ></span>
                    </label>
                </div>

                <div className="delete">
                    <AiFillDelete
                        size={18}
                        color="#F97474"
                        onClick={handleTaskDeletion}
                    />
                </div>
            </div>
        </>
    );
};

export default TaskItem;
