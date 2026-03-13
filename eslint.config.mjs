// https://docs.expo.dev/guides/using-eslint/
import cspellESLintPluginRecommended from '@cspell/eslint-plugin/recommended';
import eslint from '@eslint/js';
import expoConfig from 'eslint-config-expo/flat.js';
import json from 'eslint-plugin-json';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintReact from 'eslint-plugin-react';
import eslintReactNative from 'eslint-plugin-react-native';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import { configs } from 'typescript-eslint';

export default defineConfig([
  expoConfig,
  {
    ignores: ['dist/*', 'node_modules', 'ios', 'android', '__*', '*.md'],
    plugins: {
      'react': eslintReact,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-native': eslintReactNative,
    },
  },
  cspellESLintPluginRecommended,
  eslint.configs.recommended,
  configs.recommendedTypeChecked,
  {
    files: ['**/*.json'],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ...json.configs['recommended'],
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-floating-promises': 'off', // No need to add await or void for all promises
      'react/no-unescaped-entities': 'off', // Don't need to escape specific symbols

      // React
      'react/react-in-jsx-scope': 'off', // we don't need import React in all jsx files

      // React Native
      'react-native/no-inline-styles': 'error', // All react-native styles must be move out to a styles object
      'react-native/no-single-element-style-arrays': 'error', // Single element style arrays are not allowed.

      // TypeScript
      '@typescript-eslint/no-shadow': 'error', // Vars with the same name in different scopes are not allowed
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Names of unused vars can start only from an underscore

      // Formatting
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: ['return', 'if', 'throw'] },
        { blankLine: 'always', prev: 'if', next: '*' },
        { blankLine: 'always', prev: 'const', next: '*' },
        { blankLine: 'any', prev: 'const', next: ['const', 'let'] },
        {
          blankLine: 'always',
          prev: 'multiline-const',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'multiline-const',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'export',
        },
        {
          blankLine: 'always',
          prev: 'export',
          next: '*',
        },
      ],
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
  eslintPluginPrettierRecommended,
]);
