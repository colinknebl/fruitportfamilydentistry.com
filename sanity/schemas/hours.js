export default {
    name: 'hours',
    title: 'Office Hours',
    type: 'document',
    fields: [
        {
            name: 'days',
            title: 'Days',
            type: 'string',
        },
        {
            title: 'Office Opens',
            name: 'officeOpen',
            type: 'string',
        },
        {
            title: 'Lunch Starts',
            name: 'lunchStart',
            type: 'string',
        },
        {
            title: 'Lunch Ends',
            name: 'lunchEnds',
            type: 'string',
        },
        {
            title: 'Office Closes',
            name: 'officeClose',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'days',
        },
        // prepare() {
        //     return {
        //         title: 'Office Hours',
        //     };
        // },
    },
};
