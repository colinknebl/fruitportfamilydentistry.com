export default {
    name: 'blog',
    title: 'Blog',
    type: 'object',
    fields: [
        {
            name: 'publishDate',
            title: 'Publish Date',
            type: 'date',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'content',
        },
    ],
};
