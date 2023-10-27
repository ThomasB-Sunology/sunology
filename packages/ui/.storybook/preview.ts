import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"
import "tailwindcss/tailwind.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true },
    darkMode: {
      stylePreview: true,
      dark: { 
        ...themes.dark
      },
      light: {
        ...themes.normal
      }
    },
    options: {
      storySort: {
        order: ['Guidelines', 'Atoms'],
      },
    },
  },
}

export default preview
