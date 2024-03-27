import ririd from '@ririd/eslint-config';
import { Linter } from 'eslint';

/**
 * XenoPOMP`s ESLint flat config.
 */
export const xenopomp = () => {
  return ririd({
    typescript: true,
    next: true,

    // Disable jsonc and yaml support
    jsonc: false,
    yaml: false,

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
