/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Link as GatsbyLink } from "gatsby";

export function Link(props) {
    return (
        <GatsbyLink
            to={props.to}
            sx={{
                variant: props.variant ? `links.${props.variant}` : 'styles.a',
            }}
        >
            {props.children}
        </GatsbyLink>
    );
}
