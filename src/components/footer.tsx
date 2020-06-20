import React from 'react';
import styled from 'styled-components';

import { getLinks, QueriedLink } from '../gql/queries/links';
import { LinkList } from './link-list';
import { getHours, QueriedHours } from '../gql/queries/hours';
import {
    getContactDetails,
    Phone,
    Address,
    Link,
} from '../gql/queries/contact';

interface IFooterProps {}

export function Footer(props: IFooterProps) {
    const { links } = getLinks();
    const { hours } = getHours();
    const { contact } = getContactDetails();

    return (
        <StyledFooter>
            <SiteMap links={links} />
            <OfficeHours hours={hours} />
            <ContactDetails contact={contact} />
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    background: var(--primary-color);
    color: var(--on-primary-color);
    font-size: 1rem;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    & > div {
        text-align: center;
        padding: 0 20px 20px 20px;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            color: var(--secondary-color);
        }
    }

    address {
        font-style: normal;

        & > div {
            margin-bottom: 10px;
            a {
                text-decoration: underline;
            }
        }
    }

    .footer-section-header {
        padding-bottom: 1.5rem;
        font-size: 0.7rem;
        text-transform: uppercase;
        font-weight: bolder;
    }

    .map {
        display: block;

        margin-top: 20px;
        height: 225px;
        width: 300px;
    }

    .office-hours {
        li {
            margin-bottom: 20px;
        }

        .header {
            font-style: italic;
        }
    }

    /* mobile */
    @media screen and (max-width: 859px) {
        & > div {
            &:not(:last-of-type) {
                border-bottom: 2px solid var(--on-primary-color);
            }
        }

        .map {
            margin: auto;
        }
    }

    /* desktop */
    @media screen and (min-width: 860px) {
        grid-template-columns: 1fr 1fr 1fr;

        & > div {
            border: none !important;
            text-align: left;
        }
    }
`;

function ContactDetails({
    contact,
}: {
    contact: Array<Phone | Address | Link>;
}) {
    return (
        <div>
            <p className="footer-section-header">Contact</p>
            <address>
                {contact.map((details) => {
                    if (details instanceof Phone) {
                        return (
                            <ContactPhone key={details.id} phone={details} />
                        );
                    } else if (details instanceof Address) {
                        return (
                            <ContactAddress
                                key={details.id}
                                address={details}
                            />
                        );
                    } else if (details instanceof Link) {
                        return <ContactLink key={details.id} link={details} />;
                    }
                })}
            </address>
        </div>
    );
}

function ContactLink({ link }: { link: Link }) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `
                    ${link.display.replace(
                        '%s',
                        `<a href="${link.href}">${link.value}</a>`
                    )}
                `,
            }}
        ></div>
    );
}

function ContactPhone({ phone }: { phone: Phone }) {
    return <div>{phone.value}</div>;
}

function ContactAddress({ address }: { address: Address }) {
    return (
        <div>
            {address.line1} <br />
            {address.line2} <br />
            {address.city}, {address.state} {address.zip}
            <iframe
                className="map"
                src={address.URI}
                frameBorder="0"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
            ></iframe>
        </div>
    );
}

function OfficeHours({ hours }: { hours: QueriedHours[] }) {
    return (
        <div className="office-hours">
            <p className="footer-section-header">Office Hours</p>
            <ul>
                {hours.map((day) => (
                    <li key={day.id}>
                        <span className="header">{day.days}</span> <br />
                        {day.officeOpen} - {day.officeClose} <br />
                        Lunch: {day.lunchStart} - {day.lunchEnds} <br />
                    </li>
                ))}
                <li>
                    <span className="header">Closed</span> <br />
                    Friday - Sunday
                </li>
            </ul>
        </div>
    );
}

function SiteMap({ links }: { links: QueriedLink[] }) {
    return (
        <div {...(links.length === 0 ? { style: { display: 'none' } } : {})}>
            <p className="footer-section-header">Site Map</p>
            <nav>
                <LinkList links={links} />
            </nav>
        </div>
    );
}
