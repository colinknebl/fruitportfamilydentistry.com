export default {
    name: 'servicesPage',
    title: 'Services Page',
    type: 'document',
    fields: [
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
    preview: {
        section: {
            title: '',
        },
        prepare() {
            return {
                title: 'Services Page',
            };
        },
    },
};
