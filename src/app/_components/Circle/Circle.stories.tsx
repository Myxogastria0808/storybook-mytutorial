import type { Meta, StoryObj } from '@storybook/react';
import { Circle } from '@/app/index';

const meta = {
    title: 'COMPONENTS/Circle',
    component: Circle,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Circleのカタログ',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'color' },
            defaultValue: '#fff',
        },
        backgroundColor: {
            control: { type: 'color' },
            defaultValue: '#1d8a78',
        },
    },
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pattern1: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Primary Circle',
            },
        },
    },
    args: {
        radius: '200px',
        color: '#fff',
        text: 'Hello, World',
        backgroundColor: '#1d8a78',
    },
};

export const Pattern2: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Primary Circle',
            },
        },
    },
    args: {
        radius: '200px',
        color: '#fff',
        text: 'Hello, World',
        backgroundColor: '#1d3f8a',
    },
};

export const Pattern3: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Primary Circle',
            },
        },
    },
    args: {
        radius: '200px',
        color: '#fff',
        text: 'Hello, World',
        backgroundColor: '#678a1d',
    },
};

export const Pattern4: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Primary Circle',
            },
        },
    },
    args: {
        radius: '200px',
        color: '#fff',
        text: 'Hello, World',
        backgroundColor: '#8a361d',
    },
};
