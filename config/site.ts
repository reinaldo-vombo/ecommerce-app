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
    {name: "Acessórios", href: '#' },
    {name: "Contact", href: '/contactos' },
    {name: "Blog", href: '/blog-post/blogs' },
  ],
  megaNav: [
    {name: "Pro Gaming", link: [
      {title:'Categórias', items: '/categorias'},
      {title:'Titulo', items: ''},
      {title:'Titulo', items: ''},
    ]},
    {name: "Serviços", link: [
      {title:'Assistência técnica', items: ''},
      {title:'Dwonload', items: ''},
      {title:'Montagem de Pcs', items: ''},
    ]},
    {name: "Master Game", link: [
      {title:'Titulo', items: ''},
      {title:'Titulo', items: ''},
      {title:'Titulo', items: ''},
    ]}
  ]
}
