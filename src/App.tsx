import './App.css'
import { ArticleList } from './components/ArticleList/ArticleList'
import { Header } from "./components/header/Header"

function App() {

  return (
    <>
      <Header />
      <h1>Bienvenue dans mon blog</h1>
      <ArticleList />
    </>
  )
}

export default App
