import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
 
  return (
    <Provider store={store}>
    <div>
       <Counter/>
       <Counter/>
       <Counter/>
    </div>
    </Provider>
  );
}

export default App;
