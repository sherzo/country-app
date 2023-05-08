import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow py-4 px-6 lg:py-5 lg:px-24 bg-white">
      <Link to={'/'}>
        <h2 className="text-xl">🌎 Country App</h2>
      </Link>
    </header>
  );
}
