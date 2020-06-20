import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';

import { Content, RawBlock } from '../models/content/Content';
import Page from '../components/page';
import SEO from '../components/seo';
import { JumbotronSection } from '../components/jumbotron-section';
import { Section } from '../components/section';
import { Letter } from '../components/letter';

const TITLE = 'New Patients';

const NewPatientsPage = (props: PageProps<IPageQueryResults>) => {
    const content = new Content(props.data.sanityNewPatientsPage._rawLetter);

    return (
        <Page>
            <SEO title={TITLE} />
            <JumbotronSection
                image={props.data.placeholderImage.childImageSharp.fluid}
                title={TITLE}
            />
            <Section>
                <Letter letterContent={content} />
            </Section>
            <Section title="Forms">
                <Forms forms={props.data.sanityNewPatientsPage.forms} />
            </Section>
        </Page>
    );
};

export default NewPatientsPage;

type RawForm = {
    title: string;
    form: {
        asset: {
            url: string;
        };
    };
};

interface IPageQueryResults {
    placeholderImage: {
        childImageSharp: {
            fluid: FluidObject;
        };
    };
    sanityNewPatientsPage: {
        _rawLetter: RawBlock[];
        forms: RawForm[];
    };
}

export const query = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "office/check-in.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        sanityNewPatientsPage {
            _rawLetter
            forms {
                title
                form {
                    asset {
                        url
                    }
                }
            }
        }
    }
`;

interface IFormsProps {
    forms: RawForm[];
}

function Forms({ forms }: IFormsProps) {
    return (
        <ul>
            {forms.map((form) => (
                <li key={form.title}>
                    <a href={form.form.asset.url} target="_blank">
                        {form.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
