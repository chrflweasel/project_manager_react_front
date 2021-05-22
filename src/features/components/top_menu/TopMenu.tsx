import React from 'react'
import Paper from '@material-ui/core/Paper'
import styles from './TopMenu.module.css'
import {Typography} from "@material-ui/core";

export const TopMenu = ({title = 'Untitled'}: TopMenuTypes) => <Paper id='topMenuHeader' classes={{root: styles.topMenu}} elevation={3}>
    <Typography variant='h6'>{title}</Typography>
</Paper>

interface TopMenuTypes {
    title?: string
}