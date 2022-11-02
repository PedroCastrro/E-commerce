import React from 'react'

import Header from '../components/Header'

function Conect() {
  return (
    <div className="App">
      <Header />
      <body>
        <main>
          <h2>Localização</h2>
          <span>
            28 jackson Blvd Ste 1020 Chicago
            <br />
            il 60604-2340
          </span>
          <p>Siga-nos</p>
        </main>
        <aside>
          <h2>Formulario de Contato</h2>
          <input type="text" placeholder='Enter your Name' />
          <input type="email" placeholder='Enter a valid email address'/>
          <input type="textarea" placeholder='Enter your message' />
          <input type="submit" value="Submit" />
        </aside>
        <footer>
          <p>2022 Politica de privacidade</p>
        </footer>
      </body>
    </div>
  )
}

export default Conect
