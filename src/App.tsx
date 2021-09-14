import CountriesPage from 'pages/Countries';
import CountryPage from 'pages/Country';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CountriesPage />
        </Route>
        <Route exact path="/country/:code">
          <CountryPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
