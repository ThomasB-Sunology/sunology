import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import themeConfig from "../../tailwind.config.js";

const meta: Meta = {
  title: 'Design System/Guidelines/Colors',
  render: () => {
    return (
        <div className="flex flex-row flex-wrap gap-4">
            {themeConfig.theme.colors && Object.entries(themeConfig.theme.colors).map(([k, v]) => {
                if (typeof v === "string" && (v.match(/^#/) || v.match(/^rgb/) || k.match(/color/i))) {
                    return <div className="flex flex-col gap-2">
                        <span className="text-xs">{k}</span>
                        <div className="min-w-40 h-20 rounded-md" style={{backgroundColor: v}}></div>
                    </div>;
                }
                return null;
            })}
        </div>
    );
  }
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
