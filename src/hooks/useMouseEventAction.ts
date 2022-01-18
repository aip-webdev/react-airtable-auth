import React from 'react'
import { useEventListenerAction } from './useEventListenerAction'

interface IUseMountEventActionProps {
	action: () => void
	ref: React.RefObject<HTMLElement>
}

export const useMouseEventAction = ({ action, ref }: IUseMountEventActionProps): void => {
	useEventListenerAction(
		'click',
		e => {
			if (e.target instanceof Node && !ref.current?.contains(e.target)) {
				action()
			}
		},
		[],
	)
}
