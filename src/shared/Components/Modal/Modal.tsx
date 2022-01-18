import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import {useMouseEventAction} from "../../../hooks/useMouseEventAction";
import useStyles from './styles'

interface IModalProps {
	children: React.ReactNode
}

export const Modal = React.memo(({ children }: IModalProps) => {
	const [node, setNode] = useState<Element>()
	const classes = useStyles()
	const ref = useRef(null)
	const navigate = useNavigate()
	useEffect(() => {
		setNode(document.querySelector('#modal') ?? undefined)
	}, [])

	useMouseEventAction({ action: () => navigate(-1), ref })
	if (!node) {
		return null
	}
	return ReactDOM.createPortal(
		<div className={classes.modalBack}>
			<div ref={ref} className={classes.modal}>
				{children}
			</div>
		</div>,
		node,
	)
})
