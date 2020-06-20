import React from 'react';
import styled from 'styled-components';

import { Nav } from './nav';
import { getLinks } from '../gql/queries/links';

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { links } = getLinks();

    const isNavEnabled = links.length > 0;

    return (
        <StyledHeader>
            {isNavEnabled && (
                <>
                    <button
                        className="mobile-menu-link"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                    <Nav links={links} isOpen={isOpen} />
                </>
            )}
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: grid;

    .mobile-menu-link {
        border: none;
        background: none;
        color: inherit;
        font-size: 1.25rem;
        position: relative;
        z-index: 2;
        place-self: end;
    }

    @media screen and (min-width: 860px) {
        .mobile-menu-link {
            display: none;
        }
    }
`;
