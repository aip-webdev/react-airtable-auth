import { useEffect, useState } from 'react'
import { useEventListenerAction } from './useEventListenerAction'

export const useWindowSize = (): {height: number; width: number} => {
	const [size, setSize] = useState({ height: 0, width: 0 })
	useEffect(() => {
		setSize({ height: window.innerHeight, width: window.innerWidth })
	}, [])
	useEventListenerAction('resize', () =>
		setSize({ height: window.innerHeight, width: window.innerWidth }),
	)
	return size
}
