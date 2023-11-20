import logo from './logo.svg';
function Header() {
    return (
      <div className="Header">
        <header className="App-header">
          
          <ul className ="Header-List">

        <li><img src={logo} className="App-logo" alt="logo" /></li>
          <li>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </li>

          <li>
            <a
            className="App-link"
            href="./home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          </li>

          </ul>
        </header>
      </div>
    );
  }

  export default Header;