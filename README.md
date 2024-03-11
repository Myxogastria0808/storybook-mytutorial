# storybook の環境構築など

> [!NOTE]
> styled-components の場合

## install

> [!IMPORTANT]
> パッケージマネージャーは、npm を使うとよい

```batch
npx storybook@latest init
```

## .storybook/main.ts

```typescript
import type { StorybookConfig } from '@storybook/nextjs';
//import aliasを有効化
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    //静的ファイルの読み込み
    staticDirs: ['../public'],
    //import aliasを有効化
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions,
                }),
            ];
        }
        return config;
    },
};
export default config;
```

## .storybook/preview.tsx

```typescript
import React from 'react';
import type { Preview } from '@storybook/react';
import { Inter } from 'next/font/google';

//フォントを使用するための設定
const inter = Inter({ subsets: ['latin'] });

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        //背景色の変更
        backgrounds: {
            default: 'default',
            values: [
                {
                    name: 'default',
                    value: '#272727',
                },
                {
                    name: 'white',
                    value: '#fff',
                },
            ],
        },
    },
    //フォントの使用をするための設定
    decorators: [
        (Story) => (
            <>
                <main className={inter.className}>
                    <Story />
                </main>
            </>
        ),
    ],
};

export default preview;
```

## src/stories

> [!NOTE]
> stories ディレクトリには、assets ディレクトリと Configure.mdx のみを入れる！

## src/stories/Configure.mdx (サンプル)

```mdx
import { Meta } from '@storybook/blocks';
import Image from 'next/image';

<Meta title="Configure your project" />

<h1 className="title">Hello, Storybook!</h1>

<Image
    src={'./assets/pexels-asad-photo-maldives-457881.jpg'}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    alt={'stableDiffusion4R_API'}
/>

<style>
    {`
    .title {
      text-align: center;
      font-size: 30px;
    }
  `}
</style>
```

## .prettierrc

```json
{
    "printWidth": 120,
    "tabWidth": 4,
    "singleQuote": true,
    "trailingComma": "es5",
    "semi": true
}
```
