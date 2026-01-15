import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
      <>
          <Navbar />
          <Home 
            titulo="Componente Home"
            texto="Bem-vindo ao Blog Pessoal!"
          />
          <Footer />
      </>
  )
}

export default App
