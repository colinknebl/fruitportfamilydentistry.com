import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { LinkList } from './link-list';
import type { QueriedLink } from '../gql/queries/links';

interface INavProps {
    links: QueriedLink[];
    isOpen: boolean;
}

export function Nav({ links, isOpen }: INavProps) {
    return (
        <StyledNav {...(isOpen ? { open: true } : {})}>
            <LinkList links={links} />
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        position: relative;
    }

    li {
        display: inline-block;
    }

    .link {
        text-decoration: none;
        color: inherit;

        &:active,
        &:hover {
            color: var(--secondary-color);
        }
    }

    /* mobile */
    @media screen and (max-width: 859px) {
        background: rgba(255, 255, 255, 0.9);
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        transform: translate3d(100%, 0, 0);
        transition: transform 200ms ease-in-out;

        ul {
            /* height: 100vh;
            width: 100vw; */
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        li {
            margin-bottom: 10px;
        }

        &[open] {
            transform: translate3d(0, 0, 0);
        }
    }

    /* desktop version */
    @media screen and (min-width: 860px) {
        padding: 20px 5px;
        margin: 10px 0;
        position: relative;

        ul {
            display: flex;
            justify-content: space-around;
        }

        &::before,
        &::after {
            content: '';
            border-radius: 10px;
            display: block;
            background: var(--primary-color);
            width: 60%;
            height: 3px;
            margin: auto;
            position: absolute;
            left: 0;
            right: 0;
        }
        &::before {
            top: 0;
        }
        &::after {
            bottom: 0;
        }
    }
`;
