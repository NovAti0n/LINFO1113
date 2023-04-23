import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";

const customElements = [
    "mjx-container",
    "mjx-assistive-mml",
    "math",
    "maction",
    "maligngroup",
    "malignmark",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mi",
    "mlongdiv",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mscarries",
    "mscarry",
    "mscarries",
    "msgroup",
    "mstack",
    "mlongdiv",
    "msline",
    "mstack",
    "mspace",
    "msqrt",
    "msrow",
    "mstack",
    "mstack",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "semantics",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mspace",
    "mtext",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "msqrt",
    "mstyle",
    "mmultiscripts",
    "mover",
    "mprescripts",
    "msub",
    "msubsup",
    "msup",
    "munder",
    "munderover",
    "none",
    "maligngroup",
    "malignmark",
    "mtable",
    "mtd",
    "mtr",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "msline",
    "msrow",
    "mstack",
    "maction",
    "semantics",
    "annotation",
    "annotation-xml"
];

export default defineConfig({
    lang: "fr-BE",
    title: "LINFO1113",
    description: "Solutions et explications des TPs du cours LINFO1113 (Algorithmique numérique)",
    cleanUrls: true,
    head: [
        ["link", { rel: "icon", type: "image/x-icon", href: "favicon/favicon.png" }],
        ["meta", { name: "theme-color", content: "#3c8772" }]
    ],
    markdown: {
        config: (md) => {
            md.use(mathjax3);
        }
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag)
            }
        }
    },
    themeConfig: {
        darkModeSwitchLabel: "Apparence",
        docFooter: {
            prev: "TP précédent",
            next: "TP suivant"
        },
        editLink: {
            pattern: "https://github.com/NovAti0n/LINFO1113/edit/main/src/:path",
            text: "Éditer cette page sur GitHub"
        },
        outline: {
            label: "Sur cette page"
        },
        returnToTopLabel: "Revenir au début",
        sidebar: [
            {
                text: "Exercices de TPs",
                items: [
                    { text: "E0", link: "/e0" },
                    { text: "E1.1", link: "/e1-1" },
                    { text: "E1.2", link: "/e1-2" },
                    { text: "E2.1", link: "/e2-1" },
                    { text: "E2.2", link: "/e2-2" },
                    { text: "E3.1", link: "/e3-1" },
                    { text: "E3.2", link: "/e3-2" },
                    { text: "E3.3", link: "/e3-3" },
                    { text: "E4", link: "/e4" },
                    { text: "E5", link: "/e5" },
                    { text: "E6", link: "/e6" },
                    { text: "E7", link: "/e7" },
                    { text: "E8", link: "/e8" },
                ]
            }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/NovAti0n/LINFO1113" }
        ]
    }
});