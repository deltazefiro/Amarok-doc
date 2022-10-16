module.exports = {
  title: 'Amarok-doc',
  description: 'Amarok文档',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  base: '/Amarok-doc/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '介绍', link: '/intro' },
      { text: '下载', link: '/download' },
      { text: '应用隐藏指南', link: '/hideapp' },
      { text: '常见问题', link: '/faq' }
    ],

    sidebar: [
      '/intro',
      '/hideapp',
      '/faq'
    ],

    repo: 'deltazefiro/Amarok-doc',

    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,

    lastUpdated: true
  }
}
  
