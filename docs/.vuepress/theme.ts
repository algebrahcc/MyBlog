import { hopeTheme, ThemeOptions } from 'vuepress-theme-hope'

import * as navbar from './navbar'
import * as sidebar from './sidebar'
import { pwa } from './plugin-config'

const hostname = process.env.HOSTNAME || 'https://www.zhaobc.site'

export const themeOptions: ThemeOptions = {
  hostname,

  author: {
    name: 'Great Wall',
    url: 'http://localhost:8080',
  },

  iconPrefix: 'iconfont icon-',

  logo: '/1.jpg',

  // repo: 'https://github.com/FuckDoctors/notes3',

  fullscreen: true,

  docsDir: 'docs',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  // pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag'],

  blog: {
    medias: {
      Email: 'mailto:greatwallheng@gmail.com',
      // GitHub: 'https://github.com/FuckDoctors',
    },
  },

  locales: {
    /**
     * Chinese locale config
     */
    '/': {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "欢迎来到文心微雕 | GreatWall's Blog",

      displayFooter: true,

      blog: {
        description: '一个半吊子工程师',
        intro: '/about.html',
      },
    },

    /**
     * English locale config
     */
    '/en/': {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: "欢迎来到文心微雕 | GreatWall's Blog",

      displayFooter: true,

      blog: {
        description: '一个半吊子工程师',
        intro: '/en/about.html',
      },
    },
  },

  plugins: {
    // blog: true,
    blog: {
      article: '/posts/',
      excerpt: true,
    },

    // 组件插件
    components: {
      rootComponents: {
        backToTop: true,
        // addThis: 'ra-573c860d3e983e59',
      },
      components: ['CodePen', 'StackBlitz', 'Replit', 'SiteInfo', 'Share'],

      componentOptions: {
        share: {
          services: [
            'qq',
            'weibo',
            'evernote',
            'email',
            'facebook',
            'twitter',
          ],
        },
      },
    },

    // you can also use Waline
    comment: {
      provider: 'Giscus',
      repo: 'FuckDoctors/notes2',
      repoId: 'R_kgDOHFsMkw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOHFsMk84COVMW',
    },

    mdEnhance: {
      attrs: true,
      gfm: true,
      container: true,
      tabs: true,
      codetabs: true,
      vPre: true,
      align: true,
      sup: true,
      sub: true,
      footnote: true,
      mark: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      tasklist: true,
      katex: true,
      mathjax: true,
      include: true,
      chart: true,
      echarts: true,
      flowchart: true,
      mermaid: true,
      demo: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      vuePlayground: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      card: true,
    },

    // PWA
    pwa,
  },
}

export default hopeTheme(themeOptions)
