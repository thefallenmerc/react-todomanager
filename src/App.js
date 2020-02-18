import React from 'react';
import "./styles/main.scss";

import InputField from "./components/InputField";
import TaskList from "./components/TaskList";
import TaskDescription from "./components/TaskDescription";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "TODO",
            lastIndex: -1,
            selectedIndex: null,
            selectedTask: null,
            tasks: []
        };

        this.addTask = this.addTask.bind(this);
        this.selectTask = this.selectTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
    }

    addTask(event) {
        if (event.key === "Enter") {
            if (event.target.value.trim() === "") {
                return;
            }
            const { tasks } = this.state;
            const lastIndex = this.state.lastIndex + 1;
            const task = this.makeTask(event.target.value);
            tasks.push(task);
            this.setState({
                tasks,
                lastIndex: task.key
            });
            event.target.value = "";
        }
    }

    makeTask(name = "New Todo Task", isComplete = false, description = "") {
        return {
            name,
            description,
            isComplete,
            key: this.state.lastIndex + 1
        };
    }

    selectTask(task) {
        this.setState({
            selectedIndex: task.key,
            selectedTask: task
        });
    }

    get selectedTask() {
        return this.state.tasks.find(task => task.key === this.state.selectedIndex);
    }

    deleteTask(event, task) {
        event.stopPropagation(event);
        const { tasks } = this.state;
        tasks.splice(tasks.findIndex(t => t.key === task.key), 1);
        this.setState({
            tasks,
            selectedIndex: undefined,
            selectedTask: undefined
        });
    }

    updateTask(task) {
        const { tasks } = this.state;
        tasks.splice(tasks.findIndex(t => t.key === task.key), 1, task);
        this.setState({
            tasks,
            selectedTask: task
        });
    }

    updateDescription(event) {
        const task = this.selectedTask;
        task.description = event.target.value;
        this.updateTask(task);
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="username">{this.state.name}</div>
                    <InputField addTask={this.addTask} />
                </nav>
                <div className="main-content">
                    <TaskList
                        {...this.state}
                        deleteTask={this.deleteTask}
                        selectTask={this.selectTask}
                    />
                    <TaskDescription
                        updateTask={this.updateTask}
                        task={this.state.selectedTask}
                    />
                </div>
            </div>
        );
    }
}