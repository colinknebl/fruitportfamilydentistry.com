import { useStaticQuery, graphql } from "gatsby"
import { HomeLetter } from '../../models/HomeLetter';

type LinkQueryResult = {
    sanitySite: {
        _rawHomeLetter: HomeLetter.Raw
    }
}

export const getLetter = (): HomeLetter => {
    const { sanitySite } = useStaticQuery<LinkQueryResult>(graphql`
        {
            sanitySite {
                _rawHomeLetter
            }
        }
    `);

    return new HomeLetter(sanitySite?._rawHomeLetter);
}
