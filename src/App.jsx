import { useEffect } from 'react'
import useSpotifyAccessToken from './hooks/useSpotifyAccessToken'
import { useDispatch } from 'react-redux'
import { setToken } from './slice/tokenSlice'

function App() {

  useEffect(() => {
    document.title = "Spotify Music Library React and TailwindCSS"
    document.body.classList.add("bg-slate-950");
  })

  const token = useSpotifyAccessToken();

  const dispatch = useDispatch();

  if (token) {
    dispatch(setToken({token: token}))
  }

  return (
    <>
      <h1 className='text-xl text-white text-center mt-6'>Spotify Music Library React and TailwindCSS</h1>
    </>
  )
}

export default App
