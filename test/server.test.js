const app = require('../server')
const supertest = require('supertest')
const request = supertest(app)

it('gets back body parameter', async done => {
    const res = await request.get('?body=test')
    expect(res.status).toBe(200);
    expect(res.text).toBe('test');
    done();
});

it('gets 500 status', async done => {
    const res = await request.get('?status=500')
    expect(res.status).toBe(500);
    done();
});

it('gets back json object', async done => {
    const body = {'prop1': 'test', 'prop2': true};
    const res = await request.post('/').type('json').send({
        'body': body,
        'headers': {
            'content-type': 'application/json'
        }
    });
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual(body);
    done();
});
