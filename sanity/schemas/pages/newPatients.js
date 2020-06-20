export default {
    name: 'newPatientsPage',
    title: 'New Patients Page',
    type: 'document',
    fields: [
        {
            title: 'Letter',
            name: 'letter',
            type: 'content',
        },
        {
            title: 'Forms',
            name: 'forms',
            type: 'array',
            of: [{ type: 'form' }],
        },
    ],
    preview: {
        section: {
            title: '',
        },
        prepare() {
            return {
                title: 'New Patients Page',
            };
        },
    },
};
