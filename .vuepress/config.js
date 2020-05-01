module.exports = {
    port: "3000",
    dest: "docs",
    ga: "UA-85414008-1",
    base: "/mirai-doc/",
    markdown: {
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Mirai",
            description: "Mirai 是一个在全平台下运行，提供 QQ Android 和 TIM PC 协议支持的高效率机器人框架"
        },
        "/en/": {
            lang: "en-US",
            title: "Mirai",
            description: "Coroutine-based open-source multiplatform library of QQ protocol."
        }
    },
    head: [["link", {rel: "icon", href: `/favicon.ico`}]],
    themeConfig: {
        repo: "mamoe/mirai",
        docsRepo: "mamoe/mirai-doc",
        editLinks: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: "指南",
                        link: "/guide/"
                    },
                    {
                        text: "配置",
                        link: "/config/"
                    },
                    {
                        text: "KDoc 文档",
                        items: [
                            {
                                text: "mirai-core 文档",
                                link: "https://plexpt.github.io/mirai-doc/kdoc/mirai-core/"
                            },
                            {
                                text: "mirai-console 文档(待续)",
                                link: "/"
                            }
                        ]
                    },

                    {
                        text: "生态",
                        items: [
                            {
                                text: "mirai-console 插件平台",
                                link: "https://github.com/mamoe/mirai-console"
                            },
                            {
                                text: "mirai-native 支持酷Q插件",
                                link: "https://github.com/iTXTech/mirai-native"
                            },
                            {
                                text: "python-mirai",
                                link: "https://github.com/NatriumLab/python-mirai"
                            },
                            {
                                text: "mirai-api-http 其他任意语言",
                                link: "https://github.com/mamoe/mirai-api-http"
                            }
                        ]
                    },
                    {
                        text: "更新日志",
                        link:
                            "https://github.com/mamoe/mirai/blob/master/CHANGELOG.md"
                    }
                ],
                sidebar: {
                    "/guide/": genGuideSidebar(true),
                    "/config/": genConfigSidebar(true)
                }
            },
            "/en/": {
                label: "English",
                selectText: "Languages",
                editLinkText: "Edit this page on GitHub",
                lastUpdated: "Last Updated",
                nav: [
                    {
                        text: "Guide",
                        link: "/en/guide/"
                    },
                    {
                        text: "Config",
                        link: "/en/config/"
                    },
                    {
                        text: "Ecosystem",
                        items: [
                            {
                                text: "mirai-console",
                                link: "https://github.com/mamoe/mirai-console"
                            }
                        ]
                    },
                    {
                        text: "Changelog",
                        link:
                            "https://github.com/mamoe/mirai/blob/master/CHANGELOG.md"
                    }

                ],
                sidebar: {
                    "/en/guide/": genGuideSidebar(false),
                    "/en/config/": genConfigSidebar(false)
                }
            }
        }
    }
};

function genGuideSidebar(isZh) {
    return [
        {
            title: isZh ? "快速入门" : "Getting Start",
            collapsable: false,
            children: ["", "quick-start", "install", "config"]
        },
        {
            title: isZh ? "核心功能" : "Core",
            collapsable: false,
            children: ["core", "core2"]
        },
        {
            title: isZh ? "插件" : "Plugin",
            collapsable: false,
            children: [
                "plugins",
                "plugins2"
            ]
        },
        {
            title: "FAQ",
            collapsable: false,
            children: [
                "faq",
                "donate"
            ]
        }
    ]
}

function genConfigSidebar(isZh) {
    return [
        {
            title: isZh ? "配置" : "Config",
            collapsable: false,
            children: ["", "config2"]
        }
    ]
}
