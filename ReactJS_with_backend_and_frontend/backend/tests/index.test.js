const request = require('supertest');
const mongoose = require('mongoose');
require('dotenv').config();
const { app, server } = require('../index');

// Fermer la connexion après les tests
afterAll(async () => {
    await mongoose.disconnect();
    server.close();
});

test('L\'API doit être accessible', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
});
