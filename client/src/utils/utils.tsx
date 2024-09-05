import * as React from 'react';
import { useMediaQuery } from '@material-ui/core';

export const useIsDesktop = () => useMediaQuery('(min-width: 1252px)');

const useIsMobile = () => useMediaQuery('(max-width: 375px)');
const useIsPhone = () => useMediaQuery('(max-width: 765px)');

const useIsTablet = () => useMediaQuery('(max-width: 765px)');