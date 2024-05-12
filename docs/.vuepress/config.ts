import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: 'Amarok-doc',
  description: 'Amarok文档',
  head: [['link', { rel: 'icon', href: 'logo.svg' }]],
  base: '/Amarok-doc/',
  theme: defaultTheme({
    logo: 'logo.svg',
    logoDark: 'logo_dark.svg',
    repo: 'deltazefiro/Amarok-Hider',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        navbar: [
          { text: '主页', link: '/' },
          { text: '介绍', link: '/intro' },
          { text: '下载', link: '/download' },
          { text: '应用隐藏指南', link: '/hideapp' },
          { text: 'API', link: '/api'},
          { text: '常见问题', link: '/faq' },
          { text: '隐私政策', link: '/privacy_policy'}
        ],
        sidebar: [
          '/intro',
          '/download',
          '/hideapp',
          '/api',
          '/faq',
          '/privacy_policy'
        ],
      },
      '/en-US/': {
        selectLanguageName: 'English',
        navbar: [
          { text: 'Home', link: '/en-US/' },
          { text: 'Introduction', link: '/en-US/intro' },
          { text: 'Download', link: '/en-US/download' },
          { text: 'AppHider Setup', link: '/en-US/hideapp' },
          { text: 'API', link: '/en-US/api'},
          { text: 'FAQ', link: '/en-US/faq' },
          { text: 'Privacy Policy', link: '/en-US/privacy_policy'}
        ],
        sidebar: [
          '/en-US/intro',
          '/en-US/download',
          '/en-US/hideapp',
          '/en-US/api',
          '/en-US/faq',
          '/en-US/privacy_policy'
        ],
      },
    },
  }),
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Amarok',
      description: '一键隐藏隐私文件与应用',
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Amarok',
      description: 'Hide your private files and apps with a single click',
    },
  },
})