module.exports = {
  siteMetadata: {
    description: "Data Science Mentoring",
    locale: "en",
    title: "Vytautas Bielinskas - Data Scientist",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-green",
      },
    },
  ],
}