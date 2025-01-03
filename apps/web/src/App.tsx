import { add } from '@repo/utils';
import './App.css';
import { Button } from '@repo/ui';

function App() {
  return <Button label={add(1, 2).toString()} />;
}

export default App;
