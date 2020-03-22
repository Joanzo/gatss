const path = require('path');

module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve('@babel/plugin-proposal-class-properties'),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries'),
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  // Typescript configuration
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
          plugins: [
            require.resolve('@babel/plugin-proposal-class-properties'),
            // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
            require.resolve('babel-plugin-remove-graphql-queries'),
          ],
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.devtool = 'source-map';

  const pathToInlineSvg = path.resolve(__dirname, '../static/icons');
  const fileLoaderRule = config.module.rules.find(rule =>
    rule.test.test('.svg'),
  );
  fileLoaderRule.exclude = pathToInlineSvg;

  config.module.rules.push({
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    include: pathToInlineSvg,
    issuer: {
      test: /\.(j|t)sx?$/,
    },
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.svg(\?.*)?$/,
    use: [
      'url-loader', // for file-loader or url-loader or svg-url-loader
      'svg-transform-loader',
    ],
  });

  // Add SVGR Loader
  // ========================================================
  // Remove svg rules from existing webpack rule
  // const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

  // const assetLoader = {
  //   loader: assetRule.loader,
  //   options: assetRule.options || assetRule.query,
  // };

  // config.module.rules.unshift({
  //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  //   issuer: {
  //     test: /\.(j|t)sx?$/,
  //   },
  //   use: [
  //     {
  //       loader: '@svgr/webpack',
  //       options: {
  //         icon: true,
  //       },
  //     },
  //     // assetLoader,
  //   ],
  // });

  // config.module.rules.push({
  //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  //   loader: 'svg-url-loader',
  // });

  // config.module.rules.unshift({
  //   test: /\.(png|jpg|gif|woff|woff2|eot|ttf)(\?.*)?$/,
  //   loader: 'file-loader',
  //   query: { name: 'static/media/[name].[ext]' },
  // });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      {
        loader: 'style-loader',
      },
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 2,
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
          sourceMap: true,
        },
      },
      {
        loader: 'resolve-url-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          sourceMap: true,
          plugins: [
            require('autoprefixer')({
              browsers: ['>0.25%', 'not dead'],
            }),
          ],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          prependData: `
            @import "theme.scss";
            `,
          sassOptions: {
            includePaths: ['src/theme'],
          },
        },
      },
      // {
      //   loader: 'postcss-loader',
      //   options: {
      //     ident: 'postcss',
      //     plugins: [require('autoprefixer')()],
      //   },
      // },
    ],
  });

  // 'resolve-url-loader',
  // require.resolve('sass-loader'),
  // {
  //   loader: require.resolve('postcss-loader'),
  //   options: {
  //     ident: 'postcss',
  //     plugins: () => [
  //       require('postcss-flexbugs-fixes'),
  //       require('postcss-inline-svg'),
  //       require('postcss-svgo'),
  //       autoprefixer({
  //         browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
  //         flexbox: 'no-2009',
  //       }),
  //     ],
  //   },
  // },

  // Example old code, NO NEED FORT THIS. Already handled on .babelrc
  // config.resolve.alias['~/'] = path.resolve(__dirname, '../src/');
  // config.resolve.alias['~storybook/'] = path.resolve(
  //   __dirname,
  //   '../.storybook/',
  // );
  // config.resolve.alias['~ds/'] = path.resolve(
  //   __dirname,
  //   '../src/_design-system/',
  // );

  return config;
};
