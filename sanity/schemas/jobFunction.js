export default {
    name: 'jobFunction',
    type: 'object',
    fields: [
        {
            title: 'Employees',
            name: 'employees',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            title: 'Job Description',
            name: 'jobDescription',
            type: 'content',
        },
        {
            title: 'Image (optional)',
            name: 'image',
            type: 'image',
        },
    ],
};
