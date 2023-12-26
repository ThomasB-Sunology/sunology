declare const _default: (typeof forms | typeof typography | {
    handler: () => void;
} | {
    (options: any): {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config>;
    };
    __isOptionsFunction: true;
} | {
    handler: import("tailwindcss/types/config").PluginCreator;
    config?: Partial<import("tailwindcss/types/config").Config>;
})[];
export default _default;
import forms = require("@tailwindcss/forms");
import typography = require("@tailwindcss/typography");
