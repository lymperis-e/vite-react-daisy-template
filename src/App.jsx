import { HashRouter, Routes, Route } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"

import Home from './routes/Home'

function App() {

  return (

    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<NavbarComponent />}>

            <Route index element={<Home />} />
            {/*<Route  path="/contact" element={<Contact />} />*/}

          </Route>
        </Routes>
      </HashRouter>
      {/*<FooterComponent/>*/}
    </>

  )
}

export default App
