import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Board from './components/board/board';


export default function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Board/>
    </div>
  );
}
