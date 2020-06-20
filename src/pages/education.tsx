import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';

import { Content, RawBlock } from '../models/content/Content';
import Page from '../components/page';
import SEO from '../components/seo';
import { JumbotronSection } from '../components/jumbotron-section';
import { Section } from '../components/section';
import { ContentView } from '../components/content-view';

const TITLE = 'Education';

const EducationPage = (props: PageProps<IPageQueryResults>) => {
    const content = new Content(props.data.sanityEducationPage._rawDisclaimer);
    return (
        <Page>
            <SEO title={TITLE} />
            <JumbotronSection
                image={props.data.placeholderImage.childImageSharp.fluid}
                title={TITLE}
            />
            <Section title="External Resources">
                <ul>
                    {props.data.sanityEducationPage.links.map((link, i) => (
                        <EducationLink key={link._key} link={link} />
                    ))}
                </ul>
            </Section>
            <Section title="Disclaimer">
                <ContentView content={content} />
            </Section>
        </Page>
    );
};

export default EducationPage;

type EducationLink = {
    _key: string;
    name: string;
    url: string;
};

interface IPageQueryResults {
    placeholderImage: {
        childImageSharp: {
            fluid: FluidObject;
        };
    };
    sanityEducationPage: {
        links: EducationLink[];
        _rawDisclaimer: RawBlock[];
    };
}

export const query = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "education.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        sanityEducationPage {
            links {
                _key
                name
                url
            }
            _rawDisclaimer
        }
    }
`;

interface IEducationLinkProps {
    link: EducationLink;
}

function EducationLink({ link }: IEducationLinkProps) {
    return (
        <li>
            <a href={link.url} target="_blank">
                {link.name}
            </a>
        </li>
    );
}
