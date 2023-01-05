import './App.css';
import Smile from "./components/Smile";

function App() {
  
  return (
    <main className="container">
      <Smile name = "🥰" initialValue = {0}/>
      <Smile name = "🥹" initialValue = {0}/>
      <Smile name = "🙃" initialValue = {0}/>
      <Smile name = "😇" initialValue = {0}/>
    </main>
  );
}

export default App;

