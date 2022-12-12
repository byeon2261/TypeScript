// @ts-check
/**
 * 여기다가 주석을 넣으면 나중에 해당 함수 인수를 작성할때 설명글로 나옵니다요~
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * Exits the Program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
// 위의 주석들이 ts에서 읽어들인다.(JSDoc 코멘트) 그냥 comment가 아니다.
// 주석을 넣어주면 코드 작성시 설명글로 표시가 된다.
