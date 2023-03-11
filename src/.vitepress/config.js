import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "fr-BE",
    title: "LINFO1113",
    description: "Solutions et explications des TPs du cours LINFO1113 (Algorithmique numérique)",
    cleanUrls: true,
    lastUpdated: true,
    head: [
        ["meta", { name: "theme-color", content: "#3c8772" }]
    ],
    themeConfig: {
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
        docFooter: {
            prev: "Exercice précédent",
            next: "Exercice suivant"
        },
        outline: {
            label: "Sur cette page"
        }
    }
});