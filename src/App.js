import { useState, useMemo, createContext } from 'react'
import { FilesViewer } from './FilesViewer'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import TwoImagesPage from './TwoImagesPage'
import ThreeImagesPage from './ThreeImagesPage'
import Home from './Home'
export const ThemeContext = createContext()

function App() {
  const [paths, setPaths] = useState({
    path21: '',
    path22: '',
    path31: '',
    path32: '',
    path33: ''
  })
  return (
    <>
      <ThemeContext.Provider
        value={{
          paths,
          setPaths
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/twoimages" element={<TwoImagesPage />} />
            <Route path="/threeimages" element={<ThreeImagesPage />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  )
}

export default App
