import React from 'react';
import { graphql, PageProps } from 'gatsby';

function Admin(props: PageProps<IPageQueryResults>) {
    React.useEffect(() => {
        window.location.assign(props.data.site.siteMetadata.sanityStudioURL);
    }, []);

    return (
        <div>
            <p>Redirecting...</p>
            <p>
                If you are not redirected,{' '}
                <a href={props.data.site.siteMetadata.sanityStudioURL}>
                    click here
                </a>
                .
            </p>
        </div>
    );
}

export default Admin;

interface IPageQueryResults {
    site: {
        siteMetadata: {
            sanityStudioURL: string;
        };
    };
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                sanityStudioURL
            }
        }
    }
`;
