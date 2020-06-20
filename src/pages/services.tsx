import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';

import Page from '../components/page';
import SEO from '../components/seo';
import { JumbotronSection } from '../components/jumbotron-section';
import { Section } from '../components/section';

const TITLE = 'Services';

const ServicesPage = (props: PageProps<IPageQueryResults>) => {
    return (
        <Page>
            <SEO title={TITLE} />
            <JumbotronSection
                image={props.data.placeholderImage.childImageSharp.fluid}
                title={TITLE}
            />
            <Section>
                <ul>
                    {props.data.sanityServicesPage.services.map(
                        (service, i) => (
                            <li key={i}>{service}</li>
                        )
                    )}
                </ul>
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
    sanityServicesPage: {
        services: string[];
    };
}

export const query = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "dental-tools.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        sanityServicesPage {
            services
        }
    }
`;
