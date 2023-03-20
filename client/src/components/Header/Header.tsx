import SwitchTheme from '../Theme/SwitchTheme';
import Auth from '../Auth/Auth';

const Header = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <Auth />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Crypto</a>
      </div>
      <div className="navbar-end">
        <SwitchTheme />
        <label htmlFor="my-modal-5" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </label>
      </div>
    </header>
  );
};

export default Header;
