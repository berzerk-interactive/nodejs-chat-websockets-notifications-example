const request = require('supertest');
const app = require('../app')

describe('Test the root path -200', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the undefined path -404', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/thing-that-is-not-there').then((response) => {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
});

describe('Test multiply path', () => {
    test('It should response 4', (done) => {
        request(app).get('/multiply/2').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('4');
            done();
        });
    });
    test('It should response 8', (done) => {
        request(app).get('/multiply/4').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('8');
            done();
        });
    });
});
