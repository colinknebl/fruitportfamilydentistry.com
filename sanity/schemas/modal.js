export default {
    name: 'modal',
    title: 'Modal',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image (optional)',
            type: 'image',
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'content',
        },
    ],

    preview: {
        select: {
            title: 'title',
            // media: 'image',
        },
        //   prepare(selection) {
        //     const {author} = selection
        //     return Object.assign({}, selection, {
        //       subtitle: author && `by ${author}`
        //     })
        //   }
    },
};
