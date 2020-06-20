import React from 'react';

const SANITY_STUDIO_URI = 'https://ghfamilydentistry.sanity.studio/desk';

function Admin() {
    React.useEffect(() => {
        window.location.assign(SANITY_STUDIO_URI);
    }, []);

    return (
        <div>
            <p>Redirecting...</p>
            <p>
                If you are not redirected,{' '}
                <a href={SANITY_STUDIO_URI}>click here</a>.
            </p>
        </div>
    );
}

export default Admin;
