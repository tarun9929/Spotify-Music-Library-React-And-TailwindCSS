import StoreProvider from './store/store'

function App() {
  return (
    <StoreProvider children={
      <>
        <h1 className='text-xl text-white text-center mt-6'>Spotify Music Library React and TailwindCSS</h1>
      </>
    } />
  )
}

export default App
