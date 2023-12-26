declare namespace _default {
    let colors: {
        black: string;
        white: string;
        'hover-grey': string;
        'default-grey': string;
        'copy-grey': string;
        'light-grey': string;
        'faint-grey': string;
        'faded-grey': string;
        'energy-yellow': string;
        'hover-yellow': string;
        'deep-yellow': string;
        'electric-blue': string;
        'mid-blue': string;
        'deep-blue': string;
        'background-black': string;
        'dark-grey': string;
        'dark-green': string;
        'medium-green': string;
        'lighter-green': string;
        'faded-green': string;
    };
    let fontSize: {
        chip: (string | {
            lineHeight: string;
            fontWeight: string;
            letterSpacing: string;
        })[];
        'body-small': (string | {
            lineHeight: string;
            fontWeight: string;
        })[];
        'body-medium': (string | {
            lineHeight: string;
            fontWeight: string;
        })[];
        'body-large': (string | {
            lineHeight: string;
            fontWeight: string;
        })[];
        'tiny-title': (string | {
            lineHeight: string;
            fontWeight: string;
        })[];
        'small-title': (string | {
            lineHeight: string;
            fontWeight: string;
        })[];
        'medium-title': (string | {
            lineHeight: string;
            fontWeight: string;
        })[];
        'large-title': (string | {
            lineHeight: string;
            fontWeight: string;
        })[];
        'super-title': (string | {
            lineHeight: string;
            fontWeight: string;
        })[];
        'mega-title': (string | {
            lineHeight: string;
            fontWeight: string;
        })[];
    };
    namespace extend {
        namespace fontFamily {
            let inter: string[];
            let britanica: string[];
        }
        namespace aspectRatio {
            let square: string;
        }
        let spacing: {};
        let width: {};
        let minWidth: {};
        let height: {};
        namespace textShadow {
            let logo: string;
        }
    }
}
export default _default;
