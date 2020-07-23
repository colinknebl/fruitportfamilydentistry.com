import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import React from 'react';

import Page from '../components/page';
import SEO from '../components/seo';
import { JumbotronSection } from '../components/jumbotron-section';
import { Letter } from '../components/client/letter';
import { Section } from '../components/section';
import { Doctors, IDoctorViewProps } from '../components/doctors';

const IndexPage = (props: PageProps<IPageQueryResults>) => {
    return (
        <Page>
            <SEO title="Home" />
            <JumbotronSection
                image={props.data.placeholderImage.childImageSharp.fluid}
                title={props.data.site.siteMetadata.title}
            >
                <StyledDocNames>
                    <Doctors DoctorView={DoctorName} column />
                </StyledDocNames>
            </JumbotronSection>
            <Section>
                <Letter />
            </Section>
        </Page>
    );
};

export default IndexPage;

interface IPageQueryResults {
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

export const query = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "chair.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
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
`;

const StyledDocNames = styled.div`
    text-align: center;

    .doctors {
        grid-gap: 0;
        gap: 0;
    }
`;

function DoctorName({ doctor }: IDoctorViewProps) {
    return <span>{doctor.name}</span>;
}
