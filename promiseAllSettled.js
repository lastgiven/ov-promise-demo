const mockApi = require("./mockApi");

const getAListOfUsers = async (users) => {
    const promises = users.map((user, index) => {
        // return mockApi(index === 2, 1000, user);
        return mockApi(false, 1000, user);
    });
    return Promise.allSettled(promises).then((res) => {
        return res;
    }).catch((err) => {
        return 'There was an error in your code and we handled it safely ' + err.message
    });
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