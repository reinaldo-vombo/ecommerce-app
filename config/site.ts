export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "pandora",
  description: "Expertly designed gods for the workspace",
  footer: [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Shipping & Return Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  nav: [
    {name: "Acessórios", },
    {name: "Paginas", },
    {name: "Blog", },
  ],
  megaNav: [
    {name: "Pro Gaming", link: [
      {title:'Titulo', items: ''},
      {title:'Titulo', items: ''},
      {title:'Titulo', items: ''},
    ]},
    {name: "New Acessorio", link: [
      {title:'Titulo', items: ''},
      {title:'Titulo', items: ''},
      {title:'Titulo', items: ''},
    ]},
    {name: "Master Game", link: [
      {title:'Titulo', items: ''},
      {title:'Titulo', items: ''},
      {title:'Titulo', items: ''},
    ]}
  ]
}
