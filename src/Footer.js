import React from 'react'


class Footer extends React.Component {
  render() {
    return (

      <div className="Header">
        <header className="App-header App-footer">
          
          <ul className ="Header-List">

            <li> <p>&copy; 2023 Lama's Website</p></li>
            <li>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React footer item
          </a>
          </li>

          <li>
            <a
            className="App-link"
            href="./home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home footer
          </a>
          </li>

          </ul>
        </header>
      </div>
  )
}
}


export default Footer;