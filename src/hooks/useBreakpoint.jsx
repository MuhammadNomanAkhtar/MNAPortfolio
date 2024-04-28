import { useMediaQuery } from 'react-responsive';
// import { theme } from '../../tailwind.config'; // Your tailwind config
import tailwindConfig from '../../tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig'
const fullConfig = resolveConfig(tailwindConfig)

const breakpoints = fullConfig.theme.screens;

export function useBreakpoint(breakpointKey) {
  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });
  const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
  return {
    [`is${capitalizedKey}`]: bool,
  };
}