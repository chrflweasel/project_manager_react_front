import React, {useEffect, useState} from "react"
import {TopMenu} from "../components/top_menu/TopMenu";
import {ContentBox} from "../components/commons/ContentBox";
import {BoardsHolder} from "../components/boards/BoardsHolder";
import {Board} from "../components/boards/Board";
import {Task, TaskInterface} from "./tasks/Task";
import {getTasks} from "../../config/loaders";

export const Project = () => {
    const [tasks, setTasks] = useState<TaskInterface[]>([])

    useEffect(() => {
        getTasks(10).then(res => {
            if (res.success) {
                setTasks(res.tasks ? res.tasks : [])
            }
        }).catch(e => console.log(e))
    }, [])

    return <div>
        <TopMenu title='Project'/>
        <ContentBox>
            <BoardsHolder>
                <Board state={1} title='Draft'>
                    {tasks.filter(task => task.task_state === 1).map(task => <Task key={task.task_id} task={task}/>)}
                </Board>
                <Board state={2} title='Opened'>
                    {tasks.filter(task => task.task_state === 2).map(task => <Task key={task.task_id} task={task}/>)}
                </Board>
                <Board state={3} title='In Progress'>
                    {tasks.filter(task => task.task_state === 3).map(task => <Task key={task.task_id} task={task}/>)}
                </Board>
                <Board state={4} title='Done'>
                    {tasks.filter(task => task.task_state === 4).map(task => <Task key={task.task_id} task={task}/>)}
                </Board>
            </BoardsHolder>
        </ContentBox>
    </div>
}