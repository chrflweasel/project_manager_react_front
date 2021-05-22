import React from 'react'
import styles from './BoardsHolder.module.css'

export const BoardsHolder = ({children}: BoardsHolderTypes) => <div className={styles.boardsHolder}>
    {children}
</div>

interface BoardsHolderTypes {
    children: React.ReactNode
}