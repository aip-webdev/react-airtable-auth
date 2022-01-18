import React from 'react'

import {Modal} from "../Modal";
import {CircularProgress} from "@mui/material";


export const Loading = React.memo(() => {
	return (
		<Modal>
			<CircularProgress color='primary' />
		</Modal>
	)
})
