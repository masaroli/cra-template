import type { MediaQuery } from '../mediaQueries';

export const respondTo = (query: MediaQuery) => `only screen and ${query}`;
