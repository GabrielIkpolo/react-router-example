import './App.css';
import ButtomBar from './components/bottomBar/ButtomBar';
import Cover from './components/cover/Cover';
import TopBar from './components/topBar/TopBar';

function App() {
  return (
    <>
      <TopBar />

      <div className="App">
        <Cover />
      </div>
      
      <ButtomBar />
    </>
  );


}

export default App;
