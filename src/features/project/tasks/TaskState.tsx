import React from 'react'
import clsx from 'clsx';
import styles from './TaskState.module.css'

export const TaskState = ({state}: TaskStateTypes) => {
    let state_name = ''
    let color = ''
    switch (state){
        case 1:
            state_name = 'Draft'
            color = styles.colorDraft
            break;
        case 2:
            state_name = 'Opened'
            color = styles.colorOpen
            break;
        case 3:
            state_name = 'In Progress'
            color = styles.colorProgress
            break;
        case 4:
            state_name = 'Done'
            color = styles.colorDone
            break;
    }

    return <div className={clsx(styles.taskState, color)}>
        {state_name}
    </div>
}

interface TaskStateTypes {
    state: number
}