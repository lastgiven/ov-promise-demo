const asyncForEach = require("./asyncForEach");
const mockApi = require("./mockApi");

const getAListOfUsers = async (users) => {
    try {
        const response = [];
        await asyncForEach(users, async (user, index) => {
            // const res = await mockApi(index === 2, 1000, user);
            const res = await mockApi(false, 1000, user);
            response.push(res);
        });
        return response;
    } catch (err) {
        return 'There was an error in your code and we handled it safely: ' + err.message
    }
}

getAListOfUsers([
    {
        name: 'Koos',
        email: 'k@k.com',
        password: 'qweqwe',
        status: 'ACTIVE'
    }, {
        name: 'Susan',
        email: 's@s.com',
        password: 'qweqwe',
        status: 'ACTIVE'
    }, {
        name: 'Ploks',
        email: 'p@p.com',
        password: 'qweqwe',
        status: 'ACTIVE'
    }, {
        name: 'Werner',
        email: 'x@x.com',
        password: 'qweqwe',
        status: 'ACTIVE'
    }
]).then((res) => {
    console.log(res);
});