module.exports = {
  title: 'DuhangServer-doc',
  description: 'DuhangServer文档中心',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  base: '/DuhangServer-doc/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '服务器介绍', link: '/introduction' },
      { text: '客户端安装', link: '/installation' },
      { text: '客户端教程', link: '/tutorial' }
    ],

    sidebar: [
      '/',
      '/introduction',
      '/installation',
      '/tutorial'
    ],

    repo: 'deltazefiro/DuhangServer-doc',

    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,

    lastUpdated: true
  }
}
  
