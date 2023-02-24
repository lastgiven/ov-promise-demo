const mockApi = require("./mockApi");

const getEmailAddress = () => mockApi(false, 2000, [{ email: 'x@x.com' }]);
const getUser = () => mockApi(false, 1000, { name: 'Werner', email: 'x@x.com', password: 'qweqwe', status: 'ACTIVE' });

const logInUser = async () => {
    return getEmailAddress().then((userEmail) => {
        if (!userEmail || userEmail.length === 0) {
            throw new Error('Email not registered');
        }
    }).then(getUser).then((user) => {
        const { password } = user;
        if ('qweqwe' !== password) {
            throw new Error('Password incorrect');
        }
        if (user.status !== 'ACTIVE') {
            throw new Error('User not active');
        }
        return 'Logged In Response'
    }).catch((err) => {
        return 'There was an error in your code and we handled it safely' + err.message
    })
}

const x = logInUser().then((res) => {
    console.log(res)
});
console.log(x);