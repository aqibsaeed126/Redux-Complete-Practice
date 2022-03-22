import './App.css';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Cakecontainer from './components/cakeContainer';
import Hookcakecontainer from './components/hookCakeContainer';
import Icecreamcontainer from './components/icecreamContainer';
import Newcakecontainer from './components/newCakeContainer';
import Itemcontainer from './components/itemContainer';
import Usercontainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Usercontainer />
        <Itemcontainer cake="asas"/>
        <Itemcontainer />
        <Cakecontainer />
        <Hookcakecontainer />
        <Icecreamcontainer />
        <Newcakecontainer />
      </div>
    </Provider>
  );
}

export default App;
