import { BreakPoint, BREAKPOINT, DEFAULT_BREAKPOINTS } from "@angular/flex-layout";

const CUSTOM_BREAKPOINTS: BreakPoint[] = [
    {
        alias: 'xs',
        suffix: 'Xs',
        mediaQuery: 'screen and (max-width: 575px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'sm',
        suffix: 'Sm',
        mediaQuery: 'screen and (min-width: 576px) and (max-width: 767x)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'md',
        suffix: 'Md',
        mediaQuery: 'screen and (min-width: 768px) and (max-width: 991px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'lg',
        suffix: 'Lg',
        mediaQuery: 'screen and (min-width: 992px) and (max-width: 1199px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'xl',
        suffix: 'Xl',
        mediaQuery: 'screen and (min-width: 1200px) and (max-width: 1399px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'xxl',
        suffix: 'XXl',
        mediaQuery: 'screen and (min-width: 1400px)',
        overlapping: false,
        priority: 1001
    },

    // Less Then
    {
        alias: 'lt-sm',
        suffix: 'LtSm',
        mediaQuery: 'screen and (max-width: 575px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'lt-md',
        suffix: 'LtMd',
        mediaQuery: 'screen and (max-width: 767px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'lt-lg',
        suffix: 'LtLg',
        mediaQuery: 'screen and (max-width: 991px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'lt-xl',
        suffix: 'LtXl',
        mediaQuery: 'screen and (max-width: 1199px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'lt-xxl',
        suffix: 'LtXxl',
        mediaQuery: 'screen and (max-width: 1399px)',
        overlapping: false,
        priority: 1001
    },

    // Greather Then
    {
        alias: 'lt-xs',
        suffix: 'LtXs',
        mediaQuery: 'screen and (min-width: 576px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'lt-sm',
        suffix: 'LtSm',
        mediaQuery: 'screen and (min-width: 768px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'lt-md',
        suffix: 'LtMd',
        mediaQuery: 'screen and (min-width: 992px)',
        overlapping: false,
        priority: 1001
    },
    {
        alias: 'lt-lg',
        suffix: 'LtLg',
        mediaQuery: 'screen and (min-width: 1200px)',
        overlapping: false,
        priority: 1001
    },

    {
        alias: 'lt-xl',
        suffix: 'LtXl',
        mediaQuery: 'screen and (min-width: 1400px)',
        overlapping: false,
        priority: 1001
    },
]


export const CustomBreakPointsProvider = { 
    provide: BREAKPOINT,
    useValue: CUSTOM_BREAKPOINTS,
    multi: true
};