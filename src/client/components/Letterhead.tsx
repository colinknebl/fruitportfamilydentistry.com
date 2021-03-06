import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { getDoctors } from '../../gql/queries/doctors';
import { Image } from '../../components/image';

interface ILetterheadProps {
    date?: string;
}

interface IQueryResults {
    placeholderImage: {
        childImageSharp: {
            fluid: FluidObject;
        };
    };
    site: {
        siteMetadata: {
            title: string;
        };
    };
}

export function Letterhead({ date }: ILetterheadProps) {
    const { doctors } = getDoctors();
    const query = useStaticQuery<IQueryResults>(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "letterhead.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <StyledHeader>
                <div>
                    <Image
                        style={{
                            width: '60px',
                            height: '51px',
                        }}
                        alt="logo"
                        fluid={query.placeholderImage.childImageSharp.fluid}
                    />
                    <span className="practice-name">
                        {query.site.siteMetadata.title}
                    </span>
                    {doctors.map((doctor) => (
                        <span key={doctor.id} className="doc-name">
                            {doctor.name}
                        </span>
                    ))}
                </div>
                <div>
                    <address>
                        <span>40 E. Beech St.</span>
                        <span>Fruitport, MI 49415</span>
                        <span>(231) 865-6141</span>
                        <span>
                            <a href="https://fruitportfamilydentistry.com">
                                FruitportFamilyDentistry.com
                            </a>
                        </span>
                    </address>
                </div>
            </StyledHeader>
            <hr />
            {date && <p className="date">{date}</p>}
        </>
    );
}

const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;

    & > div:nth-child(2) {
        text-align: right;
    }

    @media screen and (max-width: 859px) {
        grid-template-columns: 1fr;

        grid-gap: 20px;

        & > div:nth-child(2) {
            text-align: left;
        }
    }

    .practice-name {
        font-weight: 900;
    }

    span {
        display: block;
    }
`;
