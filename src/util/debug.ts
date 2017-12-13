// import * as _debug from 'debug';
import isBrowser from './isBrowser';

if (isBrowser && process.env.NODE_ENV !== 'production') {
  // As a default, the debugger is enabled for the entire JoyReact namespace.
  // If you have a specifc module that you want to debug, adjust the following variable to that namespace.
  // IE to test ONLY the `Home` component, we want to enable: `JoyReact:Home`
  const enabledNamespace = '*';
  // _debug.enable(`JoyReact:${enabledNamespace}`);
} else {
  // _debug.enable('-*');
}

/**
 * Create a namespaced debug function - a logger.
 * @param {String} namespace Capitalized for a component, lowercase for a module
 * @example
 * import { createDebugger } from '~src/util'
 * const debug = createDebugger('namespace')
 *
 * debug('Some message')
 * @returns {Function}
 */
// export const createDebugger = namespace => _debug(`JoyReact:${namespace}`);
export const createDebugger = namespace => console.log(namespace);
/**
 * Default debugger, simple log.
 * @example
 * import { debug } from '~src/util'
 * debug('Some message')
 */
export const debug = createDebugger('log');
