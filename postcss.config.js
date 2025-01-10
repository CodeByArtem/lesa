import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';
import sortMediaQueries from 'postcss-sort-media-queries';

export const plugins = [
  autoprefixer(),
  purgecss({
    content: ['./**/*.html', './**/*.js'],
  }),
  sortMediaQueries({
    sort: 'mobile-first', // автоматичне сортування медіа-запитів
  }),
];
