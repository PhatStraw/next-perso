const { createSchema } = require('@tipe/js')

module.exports = createSchema([
  /**
   * Modify and add your schema here
   * */
  {
    id: 'blog',
    type: 'object',
    label: 'Blog',
    fields: [
      {
        id: 'title',
        type: 'string',
        label: 'Title'
      },
      {
        id: 'button',
        type: 'string',
        label: 'Button'
      },
      {
        id: 'src',
        type: 'string',
        label: 'Src'
      },
    ]
  },
  {
    id: 'blogs',
    type: 'array',
    label: 'Blogs',
    contains: [
      {
        id: 'blog',
        type: 'blog',
        label: 'Blog'
      }
    ]
  },
  {
    id: 'homePage',
    type: 'document',
    label: 'Home Page',
    previewPath: '/',
    fields: [
      {
        id: 'title',
        type: 'string',
        label: 'Title'
      },
      {
        id: 'subTitle',
        type: 'string',
        label: 'Sub Title'
      },
      {
        id: 'description',
        type: 'string',
        label: 'Description'
      },
      {
        id: 'musicDescription',
        type: 'string',
        label: 'Music Description'
      },
      {
        id: 'blogDescription',
        type: 'string',
        label: 'Blog Description'
      },
      {
        id: 'socialDescription',
        type: 'string',
        label: 'Social Description'
      },
      {
        id: 'blogs',
        type: 'blogs',
        label: 'Blogs'
      }
    ]
  },
])
