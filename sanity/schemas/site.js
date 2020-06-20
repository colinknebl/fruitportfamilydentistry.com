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
