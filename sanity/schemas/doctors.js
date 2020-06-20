export default {
    name: 'doctors',
    title: 'Doctors',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'content',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
};
