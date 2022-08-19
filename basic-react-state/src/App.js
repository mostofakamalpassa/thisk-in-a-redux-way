import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCounter from './components/HooksCounter';
import DynamicHookCounter from './components/DynamicHookCounter';

function App() {
 
  return (
    <Provider store={store}>
    <div>
       {/* <Counter id='2'/> */}
      <HooksCounter id="5"/>
      <DynamicHookCounter></DynamicHookCounter>
    </div>
    </Provider>
  );
}

export default App;
