import './App.css'
import ItemListContainer from './components/ItemsListContainer'
import LogoMenu from './components/Navbar/Logo'
import NavBar from './components/Navbar/Navbar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoMenu />
        <div className="justify-content-center menu2">
          <NavBar />
        </div>
      </header>
      <div>
        <ItemListContainer greeting="Productos Proximamente"/>
      </div>
    </div>
  )
}

export default App
