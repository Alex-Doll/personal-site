/** @jsx jsx */
import { Button, jsx, useColorMode } from 'theme-ui';

import PropTypes from "prop-types"

import { Link } from "./link"
import { NavLink } from './navLink';

function Header({ siteTitle }) {
    const [colorMode, setColorMode] = useColorMode();

    return (
        <header
            sx={{
                backgroundColor: 'background',
                boxShadow: 'bottom',
                marginBottom: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: [2, 3, 4],
            }}
        >
            <h1>
                <Link to="/">
                    {siteTitle}
                </Link>
	          </h1>
            <nav
                sx={{
                    '& > *': {
                        marginLeft: [2, 3, 4],
                    },
                    '& :first-child': {
                        marginLeft: 0,
                    },
                }}
            >
	              <NavLink to='/writing' text='Writing' />
	              <NavLink to='/music' text='Music' />
	              <NavLink to='/projects' text='Projects' />
	              <NavLink to='/about' text='About' />
                <Button
                    sx={{
                        marginLeft: [2, 3, 4],
                    }}
                    onClick={() => setColorMode(colorMode === 'default' ? 'light' : 'default')}
                >
                    Mode: {colorMode === 'default' ? 'Dark' : 'Light'}
                </Button>
            </nav>
        </header>
    );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
