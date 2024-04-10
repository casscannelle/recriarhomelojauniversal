import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button'
import './Nav.css';

//icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Nav = ({ user, onLogin, onLogout, onCreateAccount, onSearch }) => (
  <header>
    <div className="storybook-nav">
      <div>
        <img src="https://universalmusic.vtexassets.com/assets/vtex/assets-builder/universalmusic.store-theme/0.0.44/img/logo-header___c868d480435ae4227f5678d2e3b4ffb0.png"></img>
      </div>
      <div>
      <nav className="menu">
        <ul>
          <li><a href="#">Artistas</a></li>
          <li><a href="#">Gêneros</a></li>
          <li><a href="#">Lançamentos</a></li>
          <li><a href="#">Música</a></li>
          <li><a href="#">Vestuário</a></li>
          <li><a href="#">Acessórios</a></li>
          <li><Button size="medium" onClick={onCreateAccount} label="Autógrafos" /></li>
          </ul>
      </nav>
      
      </div>
      <div>
        {user ? (
          <>
            <span> 
            <SearchOutlinedIcon className="icon" size="medium" onClick={onLogin} />
            <ShoppingCartOutlinedIcon className="icon" size="medium" onClick={onLogin} />
            <PersonOutlineOutlinedIcon className="icon" size="medium" onClick={onLogout} />
            
            </span>
            <span className="welcome">
              Olá, <b>{user.name}</b>!
            </span>
            
          </>
        ) : (
          <>
            <SearchOutlinedIcon className="icon" size="medium" onClick={onLogin} />
            <PersonOutlineOutlinedIcon className="icon" size="medium" onClick={onLogin} />
            <ShoppingCartOutlinedIcon className="icon" size="medium" onClick={onLogin} />
            
          </>
        )}
      </div>
    </div>
  </header>
);

Nav.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Nav.defaultProps = {
  user: null,
};
