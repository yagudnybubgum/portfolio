# CSS Variables - Figma Design System

Этот файл содержит глобальные CSS переменные, основанные на дизайн-токенах из Figma файла.

## Структура переменных

### Spacing (Отступы)
```css
--spacing-4: 4px
--spacing-8: 8px
--spacing-16: 16px
--spacing-20: 20px
--spacing-24: 24px
--spacing-32: 32px
--spacing-40: 40px
--spacing-64: 64px
--spacing-80: 80px
--spacing-120: 120px
```

### Colors (Цвета)
```css
--color-page-bg: rgba(20, 20, 20, 1)     /* #141414 - Основной фон */
--color-white: rgba(255, 255, 255, 1)     /* #ffffff - Белый текст */
--color-gray-light: rgba(179, 179, 179, 1) /* #b3b3b3 - Светло-серый */
--color-gray-dark: rgba(51, 51, 51, 1)    /* #333333 - Темно-серый */
--color-gray-bg: rgba(191, 191, 191, 0.1) /* #bfbfbf1a - Полупрозрачный серый */
```

### Typography (Типографика)
```css
--font-family-inter: 'Inter', sans-serif
--font-weight-regular: 400
--font-weight-semibold: 600

--font-size-14: 14px
--font-size-16: 16px
--font-size-18: 18px
--font-size-24: 24px
--font-size-32: 32px

--line-height-16: 16px
--line-height-18: 18px
--line-height-20: 20px
--line-height-22: 22px
--line-height-24: 24px
--line-height-32: 32px

--letter-spacing-tight: -1.2px
--letter-spacing-medium: -1px
--letter-spacing-small: -0.5px
--letter-spacing-xs: -0.3px
```

### Other (Прочее)
```css
--border-radius-140: 140px
--transition-fast: 0.2s ease-in-out
```

## Использование

### В CSS файлах
```css
.my-component {
  background-color: var(--color-page-bg);
  padding: var(--spacing-24);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-16);
  line-height: var(--line-height-20);
}
```

### Utility классы
```css
.text-white          /* color: var(--color-white) */
.bg-page            /* background-color: var(--color-page-bg) */
.font-inter         /* font-family: var(--font-family-inter) */
.font-semibold      /* font-weight: var(--font-weight-semibold) */
.p-24               /* padding: var(--spacing-24) */
.m-32               /* margin: var(--spacing-32) */
.gap-16             /* gap: var(--spacing-16) */
```

## Преимущества

1. **Консистентность** - все значения берутся из одного источника
2. **Легкость изменений** - изменив переменную, обновляется весь проект
3. **Читаемость** - понятные названия вместо магических чисел
4. **Поддержка** - легко поддерживать и обновлять дизайн-систему

## Добавление новых переменных

При добавлении новых переменных:
1. Добавьте их в `:root`
2. Создайте соответствующие utility классы
3. Обновите эту документацию
4. Убедитесь, что переменная используется в проекте
