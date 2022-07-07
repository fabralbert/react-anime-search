import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Main } from './layout/Main'
import { Favourite } from './components/Favourite'
import { Animepage } from './components/Animepage'
import { Page404 } from './components/Page404'
import Authorization from './components/Authorization'

function App() {
  const [authorization, setAuthorization] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('authorization') == 1) setAuthorization(true)
  }, [])

  return (
    <>
      <BrowserRouter>
        {authorization ? <Header check={setAuthorization} /> : null}
        <Routes>
          {authorization ? (
            <>
              <Route exact path='/' element={<Main />} />
              <Route path='/favourite' element={<Favourite />} />
              <Route path='/:animepage/:id' element={<Animepage />} />
            </>
          ) : (
            <>
              <Route
                path='/react-anime-search'
                element={<Navigate replace to='/' />}
              />
              <Route
                path='/'
                element={<Authorization check={setAuthorization} />}
              />
            </>
          )}
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
