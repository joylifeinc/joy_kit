/// <reference types="react" />
import { ReactChildren } from 'react';
/**
 * Tests if children are nil in React.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */
export declare const isNil: (children: ReactChildren) => boolean;
/**
 * Utility function that simply returns all its children - without the need for
 * array notation and manually adding keys to each of the elements.
 *
 * As a feature of React Fiber, we can return an array of elements that don't need to have a
 * parent container (IE a div) in order to nest.
 * @param props
 * @example
 * const Component = () => (
 *   <Aux>
 *    <li>1</li>
 *    <li>2</li>
 *    <li>3</li>
 *  </Aux>
 * )
 *
 * Further Reading:
 * https://reactjs.org/blog/2017/09/26/react-v16.0.html
 *
 * Why have this utility:
 * https://pawelgrzybek.com/return-multiple-elements-from-a-component-with-react-16/
 *
 * If you attempt to directly return an array of React Elements,
 * you will receive several errors TS errors:
 *
 * 1. error TS2605: JSX element type 'Element[]' is not a constructor
 *    function for JSX elements.  Property 'render' is missing in type Element[]
 * 2. error TS2607: JSX element class does not support attributes because it
 *    does not have a 'props' property.
 *
 */
export declare const Fragments: (props: any) => any;
