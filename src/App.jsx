import { useState } from 'react'
import './reset.css'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">My Tinerary</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav justify-content-end">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="#">Cities</a>
                </li>
                <li><button class="btn btn-outline-info me-2" type="button" ><i class="bi bi-person-fill-lock">Login</i></button>
                </li>
            </ul>
          </div>
          </div>
        </nav>
      </header>
      <main>
        <div class="row">
          <div class="col-2 text-center">
            <span>Find the perfect destination</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus eaque voluptas impedit itaque laborum dicta nemo odio quisquam placeat maiores esse maxime rem consectetur veritatis dolorum, doloremque tempora, iste rerum.</p>
            <button type="button" class="btn btn-outline-danger">Ver Mas</button>
          </div>
          <div class="col-2 text-center">
            <img src="../public/Cayo de Agua.jpg" class="rounded"/>
          </div>
        </div>
      </main>
      <footer class="foo">
        <div>©2023 Argentina Programa</div>
        <div>©2023 Denis Karina Gomez Ramirez</div>
        <div>©2023 MinHub</div>
      </footer>
    </>
  )
}

export default App
