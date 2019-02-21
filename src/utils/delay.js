/**
 * delay function, returning a promise.
 *
 * @param  {int} millisecond    The millisecond which will be delayed
 */
export default function delay(millisecond) {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
}