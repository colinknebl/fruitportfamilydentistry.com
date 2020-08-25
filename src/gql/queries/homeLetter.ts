import { useStaticQuery, graphql } from "gatsby"
import { Content, RawBlock } from "../../models/content/Content"
import { LetterDate } from "../../models/LetterDate"

interface _HomeLetter {
    publishDate: string
    text: RawBlock[]
}

type LinkQueryResult = {
    sanitySite: {
        _rawHomeLetter: _HomeLetter
    }
}

export const getLetter = (): HomeLetter => {
    const {
        sanitySite: { _rawHomeLetter },
    } = useStaticQuery<LinkQueryResult>(graphql`
        {
            sanitySite {
                _rawHomeLetter
            }
        }
    `)

    return new HomeLetter(_rawHomeLetter)
}

class HomeLetter {
    private _raw: _HomeLetter
    content: Content
    private _publishDate: LetterDate
    constructor(rawLetter: _HomeLetter) {
        this._raw = rawLetter
        this.content = new Content(rawLetter.text)
        this._publishDate = new LetterDate(rawLetter.publishDate)
    }

    get publishDate(): string {
        return this._publishDate.formattedDate
    }
}
