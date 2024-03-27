import ririd from '@ririd/eslint-config';

const xenopomp = () => {
  return ririd({
    next: true,
    react: true,
    typescript: {
      overrides: {
        'ts/consistent-type-definitions': ['error', 'interface'],
        'ts/interface-name-prefix': 'off',
        'ts/explicit-function-return-type': 'off',
        'ts/explicit-module-boundary-types': 'off',
        'ts/no-explicit-any': 'off',
      },
    },

    jsonc: false,
    yaml: false,

    stylistic: {
      quotes: 'single',
      overrides: {
        'style/semi': 'off',
      },
    },

    rules: {
      'import/order': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  });
};

export default xenopomp;
