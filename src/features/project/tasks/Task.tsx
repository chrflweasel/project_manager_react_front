import React from 'react'
import styles from './Task.module.css'
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {TaskState} from "./TaskState";

export const Task = ({task}: TaskTypes) => <Paper classes={{root: styles.task}}>
    <div className={styles.container}><Typography variant='subtitle2'>{task.task_name ? task.task_name : 'noname'}</Typography></div>
    {task.task_short_description && <>
        <Divider />
        <div className={styles.container}><Typography variant='body2'>{task.task_short_description}</Typography></div>
    </>}
    <div className={clsx(styles.footer, styles.container)}><TaskState state={task.task_state}/></div>
</Paper>

interface TaskTypes {
    task: TaskInterface
}

export interface TaskInterface {
    task_id: number,
    project_id: number,
    task_name: string|null,
    task_short_description: string|null,
    task_full_description: string|null,
    parent_id: number|null,
    task_state: number
}

