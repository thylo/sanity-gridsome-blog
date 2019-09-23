export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5d88d115b4a4359aeac1db8c',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-huo8aoyf',
                  apiId: '1583615f-0e90-492a-a7df-0ed7875f0d0e'
                },
                {
                  buildHookId: '5d88d1154e70d7bc2b176dfd',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-bxbbysop',
                  apiId: '35b82732-0988-4c3c-a5ad-e261476beecf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thylo/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-bxbbysop.netlify.com', category: 'apps'}
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
