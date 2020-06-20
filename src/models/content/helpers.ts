export function parseTag(tag: string) {
    switch (tag) {
        case 'em':
            return 'em';
        case 'strong':
            return 'strong';
        case 'underline':
            return 'u';
        case 'link':
            return 'a';
        case 'strike-through':
            return 'strike';
        case 'normal':
        case 'p':
            return 'p';
        case 'bullet':
            return 'ul';
        case 'number':
            return 'ol';
        case 'li':
            return 'li';
        case 'h1':
            return 'h1';
        case 'h2':
            return 'h2';
        case 'h3':
            return 'h3';
        case 'h4':
            return 'h4';
        case 'h5':
            return 'h5';
        case 'h6':
            return 'h6';
        default:
            return 'span';
    }
}
