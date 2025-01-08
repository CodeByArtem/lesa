declare module 'postcss-sort-media-queries' {
    import { Plugin } from 'postcss';
  
    interface Options {
      sort?: 'mobile-first' | 'desktop-first';
    }
  
    const postcssSortMediaQueries: (options?: Options) => Plugin;
    export default postcssSortMediaQueries;
  }
  