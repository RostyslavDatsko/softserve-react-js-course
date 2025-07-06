/* 
Implement the getPromise(delay, message) function, which takes an integer number 
delay (between 0 and 2000) and string message and returns a Promise that waits for specified amount of time (using delay argument) and resolves with the message.
*/

function getPromise(delay, message) {
    return new Promise((resolve) => {
        if (typeof delay !== 'number' || delay < 0 || delay > 2000) {
            throw new Error('Delay must be a number between 0 and 2000');
        }
        if (typeof message !== 'string') {
            throw new Error('Message must be a string');
        }
        
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}
