/**
 * Color Palette Configuration
 * Primary color extracted from design: Burgundy/Maroon
 * Gradient extracted from feature cards section
 */

export const colors = {
    primary: '#A73860', // Main burgundy from phone number button
    primaryDark: '#8B2E4E', // Darker shade
    primaryLight: '#C4526F', // Lighter shade

    // Extended palette
    burgundy: {
        50: '#fdf4f4',
        100: '#fbe8e9',
        200: '#f6d5d8',
        300: '#eeb3b8',
        400: '#e38691',
        500: '#d15968',
        600: '#b73d53',
        700: '#9a2e43',
        800: '#81293d',
        900: '#6f2739',
        950: '#3e111b',
    },

    // Gradients
    gradients: {
        featureCard: {
            from: '#A73860', // Burgundy
            to: '#4A235A', // Deep purple
            css: 'linear-gradient(135deg, #A73860 0%, #4A235A 100%)',
        },
        heroSection: {
            from: '#8B1538',
            to: '#2D1B3D',
            css: 'linear-gradient(to right, #8B1538 0%, #2D1B3D 100%)',
        },
        // Added based on strict guidelines
        strictHero: 'linear-gradient(to right, #8B1538 0%, #2D1B3D 100%)',
    },

    // Neutrals
    white: '#ffffff',
    black: '#000000',
    gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
    },
};

export default colors;
