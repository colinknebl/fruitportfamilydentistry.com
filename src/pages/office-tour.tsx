import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import React from 'react';

import Page from '../components/page';
import SEO from '../components/seo';
import { JumbotronSection } from '../components/jumbotron-section';
import { Section } from '../components/section';
import { Image } from '../components/image';

const TITLE = 'Office Tour';

const ServicesPage = (props: PageProps<IPageQueryResults>) => {
    return (
        <Page>
            <SEO title={TITLE} />
            <JumbotronSection
                image={props.data.placeholderImage.childImageSharp.fluid}
                title={TITLE}
            />
            <Section>
                <StyledUL>
                    {props.data.allFile.nodes.map((image, i) => (
                        <li key={i}>
                            <Image fluid={image.childImageSharp.fluid} />
                        </li>
                    ))}
                </StyledUL>
            </Section>
        </Page>
    );
};

export default ServicesPage;

interface IPageQueryResults {
    placeholderImage: {
        childImageSharp: {
            fluid: FluidObject;
        };
    };
    allFile: {
        nodes: Array<{
            childImageSharp: {
                fluid: FluidObject;
            };
        }>;
    };
}

export const query = graphql`
    query {
        placeholderImage: file(
            relativePath: { eq: "office/office-front.jpg" }
        ) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        allFile(filter: { relativePath: { glob: "office/*.jpg" } }) {
            nodes {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;

const StyledUL = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
        border-radius: 30px;
        overflow: hidden;
        max-width: 100vh;
        margin: 0 auto 50px auto;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
            0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
            0 16px 16px rgba(0, 0, 0, 0.1), 0 32px 32px rgba(0, 0, 0, 0.1);

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;
