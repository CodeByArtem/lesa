export const plugins = [
  require("autoprefixer"),
  require("@fullhuman/postcss-purgecss")({
    content: ["./**/*.html"], // Вкажіть ваші HTML або шаблони
  }),
];
