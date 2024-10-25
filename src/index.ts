import ririd, { type OptionsConfig } from '@ririd/eslint-config';
import globals from 'globals';

export default function xenopomp(
  options: OptionsConfig,
): ReturnType<typeof ririd> {
  return ririd(
    {
      next: true,
      react: true,
      jsonc: false,
      yaml: false,
      stylistic: {
        semi: true,
        quotes: 'single',
      },
      typescript: {
        overrides: {
          'ts/consistent-type-definitions': ['error', 'interface'],
          'ts/interface-name-prefix': 'off',
          'ts/explicit-function-return-type': 'off',
          'ts/explicit-module-boundary-types': 'off',
          'ts/no-explicit-any': 'off',
        },
      },
      rules: {
        'import/order': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'antfu/top-level-function': 'off',
      },

      // Ignore patterns
      ignores: [
        '**/.next/*',
        '**/node_modules/*',
        '**/.github/*',
        'cypress',
        '**/__tests__/e2e/*',
        '*.json',
        '**/*.d.ts',
        '.eslintrc.js',
        'eslint.config.js',
        '.prettierrc',
        '.stylelintrc.js',
        'tsconfig.json',
        'package.json',
        '*.md',
        '*.config.ts',
        '*.config.js',
      ],

      // Allow user to override ririd options
      ...options,
    },
    {
      name: 'Old config',
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.jquery,
          ...globals.node,

          // Rewrite globals anyway
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
      },
    },
  );
}
