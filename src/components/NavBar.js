import React from 'react';
import { Menu} from 'semantic-ui-react';
import './NavBar.css';

function MenuBar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* PC View */}
      <Menu>
        <div className="ui huge text right inverted menu" style={{ paddingRight: 30 }}>
          <a className="item" onClick={() => scrollToSection('about')}>
            About
          </a>
          <a className="item" onClick={() => scrollToSection('tracks')}>
            Tracks
          </a>
          <a className="item" onClick={() => scrollToSection('qna')}>
            FAQ
          </a>
          <a className="item" onClick={() => scrollToSection('sponsors')}>
            Sponsors
          </a>
          <div className="item">
            <a className="ui orange button" href="https://events.mlh.io/events/13394-code-for-change" target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </div>
        </div>
      </Menu>
    </>
  );
}

export default MenuBar;
