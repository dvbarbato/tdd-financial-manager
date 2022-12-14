module.exports = () => {
    const findAll = (req, res) => {
        const users = [
            {
                name: 'Jose Joao',
                email: 'jj@email.com',
            },
        ];
        res.status(200).json(users);
    };

    const create = (req, res) => {
        res.status(201).json(req.body);
    };

    return { findAll, create };
};
