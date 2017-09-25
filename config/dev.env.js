var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
//  API_ROOT: '"//172.16.129.88/estateauction"'
API_ROOT: '"http://127.0.0.1:8081/JSLYMT/View/"'
})
