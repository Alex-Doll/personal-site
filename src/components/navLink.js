/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Link as GatsbyLink } from "gatsby";

export function NavLink(props) {
    return (
        <GatsbyLink
            to={props.to}
            activeClassName='active'
            sx={{
                variant: 'styles.a',
                '&.active': {
                    color: 'secondary',
                    textDecoration: 'underline',
                },
            }}
        >
            {props.text}
        </GatsbyLink>
    );
}
