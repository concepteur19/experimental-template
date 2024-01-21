import '../src/styles/App.css';
import Button from './views/components/basis/button';
import Card from './views/components/basis/card';

function App() {
  return (
    <div className="App app-container pt-4">
      <h1 className='text-6xl' >Experimental Template</h1>
      <Button addclass=' bg-red-600' />
      <Card></Card>
    </div>
  );
}

export default App;



