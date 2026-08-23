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
                            { text: '公示', link: '/broadcast/broadv1' }
                        ]
                    },
                    {   
                        text: '宣团相关',
                        items: [
                            { text: 'TRY.ing', link: '/broadcast/tryv1' }
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
                    items: [
                        { text: '公示', link: '/broadcast/broadv1' }
                    ]
                },
                {   
                    text: '宣团相关',
                    items: [
                        { text: 'TRY.ing', link: '/broadcast/tryv1' }
                    ]
                }
            ]
        }
    },
    socialLinks: [
        { icon: 'github', link: 'https://github.com/politetrex/ntms-save-broadcast' }
    ]
})
