import logo from './logo.svg';
import './App.css';
import Red from './components/Red';

function App() {
  const sayHi=function(i){
    alert('안녕하세요'+i)
  }
  return (
    <div className="App">
      반가워요
    </div>
  );
}

export default App;
