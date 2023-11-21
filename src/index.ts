
import express from 'express';
import proxy from 'http-proxy';

import router from './routes';



// Normal app
const app = express();

app.use(router);

app.listen(3000, () => {
	console.log('Listening on port 3000');
});


// proxy
const appTest = express();

const proxyServer = proxy.createProxyServer();

appTest.use((req, res) => {
	proxyServer.web(req, res, { target: 'http://localhost:3000' });
});

appTest.listen(3001, () => {
	console.log('Listening on port 3001');
});
