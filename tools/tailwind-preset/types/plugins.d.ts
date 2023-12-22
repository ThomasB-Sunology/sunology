import forms = require('@tailwindcss/forms');
import typography = require('@tailwindcss/typography');
declare const _default: ({
    handler: import("tailwindcss/types/config").PluginCreator;
    config?: Partial<import("tailwindcss/types/config").Config>;
} | typeof forms | typeof typography | {
    handler: () => void;
} | {
    (options: any): {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config>;
    };
    __isOptionsFunction: true;
})[];
export default _default;
