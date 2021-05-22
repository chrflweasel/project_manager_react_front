import React from 'react'
import {Paper} from "@material-ui/core";
import styles from './Board.module.css'
import taskStateStyles from '../../project/tasks/TaskState.module.css'
import clsx from 'clsx';

export const Board = ({children, title = 'untitled board', state}: BoardTypes) => {
    let stateColor = taskStateStyles.colorDraft
    switch (state) {
        case 2:
            stateColor = taskStateStyles.colorOpen
            break;
        case 3:
            stateColor = taskStateStyles.colorProgress
            break;
        case 4:
            stateColor = taskStateStyles.colorDone
            break;
    }

    return <Paper classes={{outlined: styles.board}}
                  elevation={0}
                  variant='outlined'>
        <Paper className={ clsx(styles.title, stateColor)}>{title}</Paper>
        <div className={styles.content}>{children}</div>
    </Paper>
}

interface BoardTypes {
    children: React.ReactNode,
    title?: string,
    state: number
}