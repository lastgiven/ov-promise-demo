module.exports = (error, duration, res) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(error) {
            reject(new Error('What the PROMISE'));
            return;
        }
        resolve(res);
        return;
    }, duration || 1000);
});