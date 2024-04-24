function withOpacity(cssVariable) {
  return `rgba(var(${cssVariable}), <alpha-value>)`
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 背景
      backgroundColor: {
        'primary-color': withOpacity('--ds-bg-primary-color'),
        'info-color': withOpacity('--ds-bg-info-color'),
      },
      // 字体
      textColor: {
        'primary-color': withOpacity('--ds-text-primary-color'),
        'title-color': withOpacity('--ds-text-title-color'),
        'regular-color': withOpacity('--ds-text-regular-color'),
        'secondary-color': withOpacity('--ds-text-secondary-color'),
        'placeholder-color': withOpacity('--ds-text-placeholder-color'),
      },
      // 颜色
      colors: {
        // 主题
        primary: withOpacity('--ds-primary-color'),
        'primary-regular': withOpacity('--ds-regular-color'),

        warning: withOpacity('--ds-warning-color'),
        info: withOpacity('--ds-info-color'),
      },

      // 边框
      borderColor: {
        'weaken-color': withOpacity('--ds-border-weaken-color'),
        'primary-color': withOpacity('--ds-border-primary-color'),
        'regular-color': withOpacity('--ds-border-regular-color'),
      },
    },
  },
  plugins: [],
}
