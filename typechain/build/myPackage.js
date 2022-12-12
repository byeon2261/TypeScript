// @ts-check
/**
 *
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
    return true;
}
/**
 * Exits the Program
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}
// 위의 주석들이 ts에서 읽어들인다.(JSDoc 코멘트) 그냥 comment가 아니다.
