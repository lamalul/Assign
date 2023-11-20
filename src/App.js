
import './App.css';
import NewComponent from './MyComponent';
import Header from './header';
import Footer from './Footer';
import './MyComponent.css';
import './header.css';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <NewComponent>This is the new component</NewComponent>
    <Footer></Footer>
    </div>
  );
}

export default App;
