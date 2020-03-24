// Copy straight from gatsby-plugin-sass with slight modification

exports.onCreateWebpackConfig = (
  { actions, stage, plugins, loaders },
  {
    cssLoaderOptions = {},
    postCssPlugins,
    useResolveUrlLoader = {
      options: {
        keepQuery: true, // so the svg query keep in place
      },
    },
    sassRuleTest,
    sassRuleModulesTest,
    ...sassOptions
  },
) => {
  /* (MODULE) SCSS RULES */
  const { setWebpackConfig } = actions;
  const PRODUCTION = stage !== 'develop';
  const isSSR = stage.includes('html');

  console.log('actions: ', actions);
  console.log('plugins: ', plugins);
  console.log('loaders: ', loaders);

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: useResolveUrlLoader ? true : !PRODUCTION,
      prependData: `
      @import "theme.scss";
      `,
      sassOptions: {
        includePaths: ['src/theme'],
        ...sassOptions,
      },
      // ...sassOptions,
    },
  };

  const sassRule = {
    test: sassRuleTest || /\.s(a|c)ss$/,
    use: isSSR
      ? [loaders.null()]
      : [
          loaders.miniCssExtract(),
          loaders.css({ ...cssLoaderOptions, importLoaders: 2 }),
          {
            loader: 'svg-transform-loader/encode-query',
          },
          loaders.postcss({ plugins: postCssPlugins }),
          sassLoader,
        ],
  };
  const sassRuleModules = {
    test: sassRuleModulesTest || /\.module\.s(a|c)ss$/,
    use: [
      !isSSR && loaders.miniCssExtract({ hmr: false }),
      loaders.css({ ...cssLoaderOptions, modules: true, importLoaders: 2 }),
      {
        loader: 'svg-transform-loader/encode-query',
      },
      loaders.postcss({ plugins: postCssPlugins }),
      sassLoader,
    ].filter(Boolean),
  };
  if (useResolveUrlLoader && !isSSR) {
    sassRule.use.splice(-1, 0, {
      loader: 'resolve-url-loader',
      options: useResolveUrlLoader.options ? useResolveUrlLoader.options : {},
    });
    sassRuleModules.use.splice(-1, 0, {
      loader: 'resolve-url-loader',
      options: useResolveUrlLoader.options ? useResolveUrlLoader.options : {},
    });
  }

  let configRules = [];

  switch (stage) {
    case 'develop':
    case 'build-javascript':
    case 'build-html':
    case 'develop-html':
      configRules = configRules.concat([
        {
          oneOf: [sassRuleModules, sassRule],
        },
      ]);
      break;
  }

  setWebpackConfig({
    module: {
      rules: configRules,
    },
  });
};
