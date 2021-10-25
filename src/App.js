import './App.css';
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createStore } from "redux";
import { rootReducer } from './redux/reducers';
import { Provider } from 'react-redux'

function App() {
  const initialState = {
    user: {
      login: "",
      password: ""
    },
    isEnabledButton: false
  }
  const store = createStore(rootReducer, initialState);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainPage/>
          </Route>
          <Route path="/profile">
            <ProfilePage/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
