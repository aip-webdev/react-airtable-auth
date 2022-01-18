import React from 'react'
import useStyles from "./styles";
import { Box } from "@mui/material";

interface ILayoutProps {
	children?: React.ReactNode
}

export const Content = React.memo(({ children }: ILayoutProps) => {
	const classes = useStyles()
	return (
		<Box className={classes.content}>
			{children}
		</Box>
	)
})
