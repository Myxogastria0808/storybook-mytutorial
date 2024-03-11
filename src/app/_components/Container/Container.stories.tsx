import type { Meta, StoryObj } from '@storybook/react';
import { Container, Circle } from '@/app/index';

const meta = {
    title: 'COMPONENTS/Container',
    component: Container,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Containerのカタログ',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Primary Container',
            },
        },
    },
    args: {
        children: (
            <>
                <Circle radius="100px" color="#fff" backgroundColor="#1d8a78" text="message" />
                <Circle radius="100px" color="#fff" backgroundColor="#1d498a" text="message" />
                <Circle radius="100px" color="#fff" backgroundColor="#8a851d" text="message" />
            </>
        ),
    },
};
