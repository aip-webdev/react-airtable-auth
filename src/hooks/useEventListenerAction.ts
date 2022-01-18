import { EventHandler, useEffect } from 'react'

export const useEventListenerAction = (
	eventType: string,
	eventAction: EventHandler<any>,
	hookDeps?: Array<any> | undefined,
):void => {
	useEffect(() => {
		window.addEventListener(eventType, eventAction)
		return () => window.removeEventListener(eventType, eventAction)
	}, [eventAction, eventType, hookDeps])
}
