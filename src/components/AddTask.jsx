import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

function AddTask() {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />

            <CustomButton>
                {" "}
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    );
}

export default AddTask;
