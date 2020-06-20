export default {
    name: 'staffPage',
    title: 'Staff Page',
    type: 'document',
    fields: [
        {
            title: 'Hygienists',
            name: 'hygienists',
            type: 'jobFunction',
        },
        {
            title: 'Assistants',
            name: 'assistants',
            type: 'jobFunction',
        },
        {
            title: 'Front Office',
            name: 'frontOffice',
            type: 'jobFunction',
        },
    ],
    preview: {
        section: {
            title: '',
        },
        prepare() {
            return {
                title: 'Staff Page',
            };
        },
    },
};
