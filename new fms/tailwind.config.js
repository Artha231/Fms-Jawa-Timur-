module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Updated to match FMS Surabaya logo orange
        primary: {
          DEFAULT: "#FF8C00", // Main orange from logo
          50: "#FFF8F0",
          100: "#FFEEDC",
          200: "#FFDBB3",
          300: "#FFC885",
          400: "#FFB556",
          500: "#FFA127",
          600: "#FF8C00", // Main orange
          700: "#E57B00",
          800: "#CC6B00",
          900: "#B35B00",
        },
        // Secondary Colors - Logo blue for accent elements
        secondary: {
          DEFAULT: "#0066CC", // Logo blue
          50: "#E6F2FF",
          100: "#CCE5FF",
          200: "#99CCFF",
          300: "#66B2FF",
          400: "#3399FF",
          500: "#0080FF",
          600: "#0066CC", // Main blue
          700: "#0052A3",
          800: "#003D7A",
          900: "#002952",
        },
        // Accent Colors - Tropical coastal theme
        accent: {
          DEFAULT: "#00B8A6", // Tropical teal
          50: "#E6FFFC",
          100: "#CCFFF9",
          200: "#99FFF3",
          300: "#66FFED",
          400: "#33FFE7",
          500: "#00E6CC",
          600: "#00B8A6", 
          700: "#009480",
          800: "#006B5A",
          900: "#004233",
        },
        // Background Colors - Clean and simple
        background: "#FAFAFA", // Warm off-white
        surface: "#FFFFFF", // Pure white for content cards
        
        // Text Colors - High contrast for readability
        text: {
          primary: "#000000", // True black from logo
          secondary: "#333333", // Dark gray for supporting text
        },
        
        // Status Colors
        success: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        warning: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        error: "#DC2626",
        
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB",
          focus: "#FF8C00", // Orange focus
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        caption: ['Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #FF8C00 0%, #0066CC 100%)',
        'gradient-coastal': 'linear-gradient(135deg, #00B8A6 0%, #0066CC 100%)',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        'orange': '0 4px 14px 0 rgba(255, 140, 0, 0.3)',
        'blue': '0 4px 14px 0 rgba(0, 102, 204, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.content-grid': {
          'display': 'grid',
          'gap': 'clamp(1rem, 3vw, 2rem)',
          'grid-template-columns': 'repeat(auto-fit, minmax(300px, 1fr))',
        },
        '.space-responsive': {
          'padding': 'clamp(1rem, 4vw, 2rem)',
        },
        '.space-section': {
          'padding': 'clamp(2rem, 8vw, 4rem) clamp(1rem, 4vw, 2rem)',
        },
      }
      
      const newComponents = {
        '.btn-primary': {
          '@apply bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-orange': {},
        },
        '.btn-secondary': {
          '@apply bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-all duration-200 shadow-blue': {},
        },
        '.btn-outline': {
          '@apply border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200': {},
        },
        '.card': {
          '@apply bg-surface rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300': {},
        },
        '.card-elevated': {
          '@apply bg-surface rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300': {},
        },
      }
      
      addUtilities(newUtilities)
      addComponents(newComponents)
    }
  ],
}