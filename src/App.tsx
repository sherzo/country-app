import Header from 'components/Header';
import Filters from 'components/Filters';
import CountryList from 'components/CountryList';

function App() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Filters />
      <CountryList />
    </main>
  );
}

export default App;
