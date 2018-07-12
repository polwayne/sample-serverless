const helloWorld = require('../handler').hello;


describe('helloWorld', () => {
    var event = {};
    var context = {};
    var resp = {};
    
    it('should call helloWorld function with success', (done) => {
        var callback = (ctx, data) => {
            console.log(data);
            resp = data;
            done();
        }
        helloWorld(event, context, callback);
        expect(resp.statusCode).toBe(200);
    });
});