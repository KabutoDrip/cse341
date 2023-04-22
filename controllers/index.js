const awesomeFunction = (req, res, next) => {
    res.json('Rick Miller');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awesome person');
};

module.exports = {awesomeFunction, returnAnotherPerson}