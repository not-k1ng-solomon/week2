require('http')
    .Server((req, res) => {

        const CORS = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
        };
        res.writeHead(200, CORS);
        if (req.url === '/sample/') return res.end('6.8.275.32-node.55');
        if (req.url === '/login/') return res.end('davlet');
        res.end('test');
    })
    .listen(process.env.PORT);