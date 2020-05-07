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
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: 'adamcampbell.org',
                acl: null
            }
        }
    ]
};
