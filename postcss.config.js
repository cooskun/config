module.exports = {
  plugins: [
    require('rfs'),
    reguire('tailwindcss'),
    require('postcss-preset-env'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
}
