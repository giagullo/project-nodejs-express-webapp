const {Pool} = require('pg')

//read config from json file
var config = require('./db_params.json')
const pool = new Pool ( config )
 console.log(config)
 console.log('Pool : ' + pool.totalCount)

module.exports.do_query = function (query_string, query_params, callback) {

    pool.query(query_string, query_params,callback)
    console.log('query: <' + query_string + '> submitted')

}
    
 