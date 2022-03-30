import { defineThemeConfig } from 'vuepress-theme-hope'
import * as navbar from './navbar'
import * as sidebar from './sidebar'

export default defineThemeConfig({
  hostname: 'https://zhaobc.site',

  author: {
    name: 'Mr.Hope',
    url: 'https://zhaobc.site',
  },

  iconPrefix: 'iconfont icon-',

  logo: '/logo.svg',

  repo: 'https://github.com/FuckDoctors/notes2',

  docsDir: 'docs',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    medias: {
      Email: 'mailto:zhbchwin@163.com',
      GitHub: 'https://github.com/FuckDoctors',
    },
  },

  locales: {
    '/': {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: 'Default footer',

      displayFooter: true,

      blog: {
        description: 'A FrontEnd programmer',
        intro: '/intro.html',
      },
    },

    /**
     * Chinese locale config
     */
    '/zh/': {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: '默认页脚',

      displayFooter: true,

      blog: {
        description: '一个前端开发者',
        intro: '/zh/intro.html',
      },
    },
  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234'],
      '/zh/guide/encrypt.html': ['1234'],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // you can also use Waline
    comment: {
      type: 'giscus',
      repo: 'FuckDoctors/notes2',
      repoId: 'R_kgDOHFsMkw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOHFsMk84COVMW',
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
  },
})
