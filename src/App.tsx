import CountriesPage from 'pages/Countries';
import CountryPage from 'pages/Country';
import client from 'lib/apolloClient';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
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
      </Provider>
    </ApolloProvider>
  );
}

export default App;
