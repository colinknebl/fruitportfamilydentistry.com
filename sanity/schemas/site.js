export default {
    name: 'site',
    title: 'Site',
    type: 'document',
    fields: [
        {
            name: 'activeModal',
            title: 'Active Modal',
            type: 'reference',
            to: [{ type: 'modal' }],
        },
        {
            name: 'homeLetter',
            title: 'Home Letter',
            type: 'blog',
        },
    ],
    preview: {
        section: {
            title: '',
        },
        prepare() {
            return {
                title: 'Site',
            };
        },
    },
};
