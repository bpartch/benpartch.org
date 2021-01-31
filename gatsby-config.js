module.exports = {
  siteMetadata: {
    title: 'Ben Partch',
    description:
      'Ben™️ is a freelance developer in Texas!!',
    url: 'https://www.benpartch.org/',
    author: 'Ben Partch',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'Ben™️ is a freelance developer in Texas!!😎',
    menuLinks: [
      {
        name: 'Ben Partch',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {
        name: 'Blog',
        slug: '/blog/',
      },
      {
        name: 'Contact',
        slug: '/contact/',
      },
    ],
    footerLinks: [
      {
        name: 'Github',
        url: 'https://github.com/bpartch/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {
        grid: 'list',
        basePath: '/blog',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
