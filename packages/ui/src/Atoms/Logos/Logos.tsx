import * as React from 'react';
import { cn } from '@sunology/utils';

export type LogosProps = React.HTMLAttributes<HTMLSpanElement>;

const Play = ({ className, ...props }: LogosProps) => {
    return (
        <span
            className={cn(
                'font-britanica font-extrabold tracking-wide text-white',
                className,
            )}
            {...props}
        >
            PLAY
        </span>
    );
};

const City = ({ className, ...props }: LogosProps) => {
    return (
        <span
            className={cn(
                'font-britanica font-extrabold tracking-wide text-white',
                className,
            )}
            {...props}
        >
            CITY
        </span>
    );
};

const PlayMax = ({ className, ...props }: LogosProps) => {
    return (
        <span
            className={cn(
                'font-britanica font-extrabold tracking-wide text-white',
                className,
            )}
            {...props}
        >
            PLAY&nbsp;
            <span className="text-energy-yellow text-shadow-logo">Max</span>
        </span>
    );
};

const PlayGo = ({ className, ...props }: LogosProps) => {
    return (
        <span
            className={cn(
                'font-britanica font-extrabold tracking-wide text-white',
                className,
            )}
            {...props}
        >
            PLAY&nbsp;
            <span className="text-energy-yellow text-shadow-logo">Go</span>
        </span>
    );
};

export { Play, City, PlayMax, PlayGo };
