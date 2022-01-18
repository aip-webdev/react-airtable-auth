 import { useEffect, useState } from 'react'
import { useWindowSize } from './useWindowSize';

export const useMediaSize = () => {
  const { width } = useWindowSize();
  const [mediaPoint, setMediaPoint] = useState({
    isSm: true,
    isMd: true,
    isLg: true,
    isXl: true,

  })
  let {isSm, isMd, isLg, isXl} = mediaPoint
  useEffect(() => {
    if (width < 640) {
      setMediaPoint({
        isSm: true,
        isMd: false,
        isLg: false,
        isXl: false,
      })
    } else if (width < 1040) {
      setMediaPoint({
        isSm: false,
        isMd: true,
        isLg: false,
        isXl: false,
      })
    }else if (width < 1440) {
      setMediaPoint({
        isSm: false,
        isMd: false,
        isLg: true,
        isXl: false,
      })
    } else {
      setMediaPoint({
        isSm: false,
        isMd: false,
        isLg: false,
        isXl: true,
      })
    }
  }, [width])

  return mediaPoint
}
