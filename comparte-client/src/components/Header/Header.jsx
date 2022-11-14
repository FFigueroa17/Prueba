import classes from './Header.module.scss';

import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <header className={classes["Header"]} >
        <Navbar/>
    </header>
  );
}

export default Header;