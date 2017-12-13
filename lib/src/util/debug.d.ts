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
export declare const createDebugger: (namespace: any) => void;
/**
 * Default debugger, simple log.
 * @example
 * import { debug } from '~src/util'
 * debug('Some message')
 */
export declare const debug: void;
