import ririd from '@ririd/eslint-config';

const xenopomp = () => {
  return ririd({
    next: true,
    react: true,
    typescript: {
      overrides: {
        'ts/consistent-type-definitions': ['error', 'interface'],
      },
    },

    jsonc: false,
    yaml: false,

    stylistic: {
      quotes: 'single',
    },

    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/order': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  });
};

export default xenopomp;
