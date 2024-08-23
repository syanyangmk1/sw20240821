const http = require('http');
const repress = require('express');
const app = express();
const router = express.Router();

app.set('port', 3000);
app.use(express.static('public'));

router