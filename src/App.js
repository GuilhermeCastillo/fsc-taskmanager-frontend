import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:8000/tasks");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <p>oii</p>
        </>
    );
}

export default App;
