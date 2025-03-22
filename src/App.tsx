import classNames from 'classnames/bind'
// import { useEffect, useState } from 'react'
// import FullScreenMessage from './components/shared/FullScreenMessage'
import styles from './App.module.scss'
import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'
// import ImageGallery from '@components/sections/ImageGallery'
import useWedding from './hooks/useWedding'

const cx = classNames.bind(styles)

function App() {
  const { wedding } = useWedding()
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)
  // const [minLoadingTimeElapsed, setMinLoadingTimeElapsed] = useState(false)

  if (wedding == null) {
    return null
  }

  // useEffect(() => {
  //   const loadingTimer = setTimeout(() => {
  //     setMinLoadingTimeElapsed(true)
  //   }, 2000)

  //   fetch('http://localhost:8888/wedding')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('정보를 불러오지 못했습니다')
  //       }
  //       return response.json()
  //     })
  //     .then((data) => {
  //       setWedding(data)
  //       setLoading(false)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //       setError(true)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  //   return () => clearTimeout(loadingTimer)}
  // }, [setMinLoadingTimeElapsed])}

  // if (loading || !minLoadingTimeElapsed) {
  //   return FullScreenMessage({ type: 'loading' })
  // }

  // if (error) {
  //   return FullScreenMessage({ type: 'error' })
  // }

  const {
    date,
    galleryImages,
    // groom,
    // bride,
    // location,
    // message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      {/* <ImageGallery images={galleryImages} /> */}
    </div>
  )
}

export default App
