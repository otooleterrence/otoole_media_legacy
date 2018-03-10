import React from 'react';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import icons from 'media/icons';
import './styles.css';



export default () => {
  return (
    <header className='header'>
      <Link to="/">
        <h1>otoole.media</h1>
      </Link>
      <nav className='navLinks'>
        <a href="mailto:terry@otoole.media" className='mailLink'>@</a>
        <OutboundLink
          eventLabel={`Outbound Link to github`}
          to="https://github.com/otooleterrence"
          target="_blank"
        >
          <img src={icons.github} className='image' />
        </OutboundLink>
        <OutboundLink
          eventLabel={`Outbound Link to github`}
          to="https://www.linkedin.com/in/otooleterrence"
          target="_blank"
        >
          <img src={icons.linkedin} className='image' />
        </OutboundLink>
        <OutboundLink
          eventLabel={`Outbound Link to github`}
          to="https://twitter.com/pterryodactyl"
          target="_blank"
        >
          <img src={icons.twitter} className='image' />
        </OutboundLink>
      </nav>
    </header>
  );
};
