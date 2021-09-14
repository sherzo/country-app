import CountriesPage from 'pages/Countries';
import CountryPage from 'pages/Country';
import client from 'lib/apolloClient';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
