/**
 * Created by Bric3d on 30-Dec-16.
 */
var express = require('express');
var app = express();
var Model = require('./Model.js');


/** Constructor **/
class User extends Model{

		constructor(variables){
				let table = "users",
						fillable = ['username', 'email', 'password', 'sex', 'orientation', 'age', 'localisation', 'lastSeen'];
				super(variables, table, fillable);
		}
}

module.exports = User;