import './App.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Panel } from '../components/Panel';

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Header />
        <Banner />
        <Panel />
      </div>
    </div>
  );
}

export default App;
