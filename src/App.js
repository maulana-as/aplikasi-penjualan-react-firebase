import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, LupaPassword, PageNotFound, Private, Registrasi } from './pages';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Private} />
        <PrivateRoute path="/produk" component={Private} />
        <PrivateRoute path="/pengaturan" component={Private} />
        <PrivateRoute path="/transaksi" component={Private} />
        <Route path="/registrasi" component={Registrasi} />
        <Route path="/login" component={Login} />
        <Route path="/lupa-password" component={LupaPassword} />
        <Route path="/page-not-found" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
