module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {ecmaVersion: 8, sourceType: 'module'},
    ignorePatterns: ['node_modules/*'],
    extends: ['eslint:recommended'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            settings: {
                react: {version: 'detect'},
                'import/resolver': {
                    typescript: {},
                },
            },
            env: {
                browser: true,
                node: true,
                es6: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:import/errors',
                'plugin:import/warnings',
                'plugin:import/typescript',
                'plugin:@typescript-eslint/recommended',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'plugin:jsx-a11y/recommended',
                'plugin:prettier/recommended',
                'plugin:testing-library/react',
                'plugin:jest-dom/recommended',
                'airbnb',
                'prettier'
            ],
            plugins: ['@typescript-eslint', 'prettier'],
            ignorePatterns: ["node_modules/*", "dist/", "build/", "__test__", "docs / "],
            rules: {
                'prettier/prettier': ['error'],
                'import/no-extraneous-dependencies': 0,
                'import/no-unresolved': 0,
                'react/prop-types': 'off',
                'import/default': 'off',
                'react/react-in-jsx-scope': 'off',
                'jsx-a11y/anchor-is-valid': 'off',
                '@typescript-eslint/no-unused-vars': ['error'],
                '@typescript-eslint/explicit-function-return-type': ['off'],
                '@typescript-eslint/explicit-module-boundary-types': ['off'],
                '@typescript-eslint/no-empty-function': ['off'],
                '@typescript-eslint/no-explicit-any': ['off'],
                'import/no-relative-packages': 0,
                'no-unused-vars': [
                    'warn',
                    {
                        argsIgnorePattern: '^_',
                        varsIgnorePattern: '^_',
                    },
                ],
                'prettier/prettier': ['error', {}, {usePrettierrc: true}],
            },
        }
    ]
};
