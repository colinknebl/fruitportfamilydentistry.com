import { useStaticQuery, graphql } from 'gatsby';

interface ContactDetails {
    zip: string;
    value: string;
    type: 'phone' | 'address' | 'link';
    state: string;
    line2: string;
    line1: string;
    city: string;
    display: string;
    mapSrc: string;
    href: string;
}

type ContactQueryResults = {
    allContactJson: {
        nodes: QueriedContactDetails[];
    };
};

export interface QueriedContactDetails extends ContactDetails {
    id: string;
}

export const getContactDetails = () => {
    const data = useStaticQuery<ContactQueryResults>(
        graphql`
            {
                allContactJson {
                    nodes {
                        id
                        zip
                        value
                        type
                        state
                        line2
                        line1
                        city
                        display
                        mapSrc
                        href
                    }
                }
            }
        `
    );

    const contact = data.allContactJson.nodes.map((contactDetails) => {
        if (contactDetails.type === 'phone') {
            return new Phone(contactDetails);
        } else if (contactDetails.type === 'address') {
            return new Address(contactDetails);
        } else if (contactDetails.type === 'link') {
            return new Link(contactDetails);
        } else {
            console.error(
                'Unrecognized contact type',
                contactDetails.type,
                contactDetails
            );
        }
    });

    return {
        contact,
    };
};

class ContactDetails {
    constructor(public contactType: 'phone' | 'address' | 'link') {}

    public format(str: string, value: string): string {
        return str.replace('%s', value);
    }
}

export class Link extends ContactDetails {
    private _rawDetails: QueriedContactDetails;

    get value(): string {
        return this._rawDetails.value;
    }

    get display(): string {
        return this._rawDetails.display;
    }

    get href() {
        return this._rawDetails.href;
    }

    get id(): string {
        return this._rawDetails.id;
    }

    constructor(contactDetails: QueriedContactDetails) {
        super('link');
        this._rawDetails = contactDetails;
    }

    public format(str: string, value: string): string {
        return str.replace('%s', value);
    }
}

export class Phone extends ContactDetails {
    private _value: string;
    private _display: string;
    private _rawDetails: QueriedContactDetails;
    get value(): string {
        return this.format(this._display, this._value);
    }

    get id(): string {
        return this._rawDetails.id;
    }

    constructor(contactDetails: QueriedContactDetails) {
        super('phone');
        this._value = contactDetails.value;
        this._display = contactDetails.display;
        this._rawDetails = contactDetails;
    }
}

export class Address extends ContactDetails {
    private _contactDetails: QueriedContactDetails;
    constructor(contactDetails: QueriedContactDetails) {
        super('address');
        this._contactDetails = contactDetails;
    }

    get id(): string {
        return this._contactDetails.id;
    }

    get line1(): string {
        return this._contactDetails.line1;
    }

    get line2(): string {
        return this._contactDetails.line2;
    }

    get city(): string {
        return this._contactDetails.city;
    }

    get state(): string {
        return this._contactDetails.state;
    }

    get zip(): string {
        return this._contactDetails.zip;
    }

    get URI(): string {
        return this._contactDetails.mapSrc;
    }

    public format(str: string, value: string): string {
        throw 'Method not implemented';
    }
}
