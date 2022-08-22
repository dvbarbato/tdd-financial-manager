const request = require('supertest');
const app = require('../src/app');

test('Deve listar todos os usuarios', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    // Espero se é um array de tamanho 1
    expect(res.body).toHaveLength(1);
    // Espero se o primeiro objeto desse array contem name e Jose Joao
    expect(res.body[0]).toHaveProperty('name', 'Jose Joao');
});

test('Deve inserir usuário com sucesso', async () => {
    const res = await request(app).post('/users').send({
        name: 'Carlos Batista',
        email: 'c@email.com',
    });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Carlos Batista');
});
