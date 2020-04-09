module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `IBM Plex Mono`,
                        variants: [`400`, '700']
                    }
                ]
            }
        }
    ]
};
