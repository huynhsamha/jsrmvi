/**
 * Author: <Ha Huynh> https://github.com/huynhsamha
 * Github: https://github.com/huynhsamha/jsrmvi
 * NPM Package: https://www.npmjs.com/package/jsrmvi
 */
interface Options {
    ignoreCase: boolean;
    replaceSpecialCharacters: boolean;
    concatBy: string;
}
declare const DefaultOption: Options;
export declare const removeVI: (text?: string, options?: Options) => string;
export { DefaultOption };
declare const jsrmvi: {
    removeVI: (text?: string, options?: Options) => string;
    DefaultOption: Options;
};
export default jsrmvi;
