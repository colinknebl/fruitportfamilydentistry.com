import React from 'react';
import { Link } from 'gatsby';
import { QueriedLink } from '../gql/queries/links';

export function LinkList({ links }: { links: QueriedLink[] }) {
    return (
        <ul>
            {links.map((link) => (
                <li key={link.id}>
                    <Link className="link" to={link.to}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
