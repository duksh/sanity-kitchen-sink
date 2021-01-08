export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff87bc13b92b3f8350c8473',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-s5a7f6t9',
                  apiId: '677bdefe-728d-410f-91f7-5253a8926103'
                },
                {
                  buildHookId: '5ff87bc11f7674fd04dd30e4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sxqzxipi',
                  apiId: '07fe745d-d039-4a88-b812-6092f003988b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/duksh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sxqzxipi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
