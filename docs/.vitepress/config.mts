import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    title: "SAVE （PT终端）",
    description: "SAVE （PT终端）网站",
    themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: '公示栏',
                items: [
                    {
                        text: 'EVAS相关',
                        items: [
                            { text: '收到v1', link: '/broadcast/defevas/broadve1' },
                            { text: '公示v1', link: '/broadcast/defevas/broadv1' },
                            { text: '收到v2', link: '/broadcast/defevas/broadev2' },
                            { text: '公示v2', link: '/broadcast/defevas/broadv2' }
                        ]
                    },
                    {   
                        text: '广告',
                        items: [
                            { text: 'TRY.ing', link: '/broadcast/ads/tryv1' }
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            '/broadcast/':
            [
                {
                    text: 'EVAS相关',
                    link: '/broadcast/defevas/broade',
                    items: [
                        { text: '收到v1', link: '/broadcast/defevas/broadve1' },
                        { text: '公示v1', link: '/broadcast/defevas/broadv1' },
                        { text: '收到v2', link: '/broadcast/defevas/broadev2' },
                        { text: '公示v2', link: '/broadcast/defevas/broadv2' }
                    ]
                },
                {   
                    text: '广告',
                    link: '/broadcast/ads/ad',
                    items: [
                        { text: 'TRY.ing', link: '/broadcast/ads/tryv1' }
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/politetrex/ntms-save-broadcast' }
        ]
    }
})