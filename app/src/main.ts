// lib/app.ts

import app from './app'
import {Config} from './environment'
//var config1=new Config();//.getValue();

app.get('/', function (req, res) {
  
});
console.log(Config);
//app.set('Config', JSON.parse(fs.readFileSync('./app/src/config.json', 'utf8')) )
app.listen(Config.PORT, function () {
  console.log('server app listening on port!', Config.PORT);
})
//app.use('/login',require('./routes/login.route').router)