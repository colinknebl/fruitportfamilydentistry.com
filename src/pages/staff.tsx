import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';

import Page from '../components/page';
import SEO from '../components/seo';
import { JumbotronSection } from '../components/jumbotron-section';
import { Section } from '../components/section';
import { Doctors } from '../components/doctors';
import { Staff } from '../components/staff';

const TITLE = 'Staff';

const StaffPage = (props: PageProps<IPageQueryResults>) => {
    return (
        <Page>
            <SEO title={TITLE} />
            <JumbotronSection
                image={props.data.placeholderImage.childImageSharp.fluid}
                title={TITLE}
            />
            <Section>
                <>
                    <Doctors />
                    <Staff />
                </>
            </Section>
        </Page>
    );
};

export default StaffPage;

interface IPageQueryResults {
    placeholderImage: {
        childImageSharp: {
            fluid: FluidObject;
        };
    };
}

export const query = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "staff/staff-cover.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
