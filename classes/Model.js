/**
 * Created by Bric3d on 30-Dec-16.
 */
var express = require('express');
var app = express();


/** Constructor **/
class Model{
		/** With variable as {id: '...', variableName: '...', ...}, table as the
		 ** table name in the database, and fillable as the fillable fiels names
		 **/
		constructor(variables, table, fillable){
				this.table = table;
				this.fillable = fillable;
				if (variables['id'] !== undefined && variables['id'] !== null){
						/** Fills object with database data **/
						this.username = "Default Male";
						this.age = 10;
						this.sex = "male";
						this.orientation = "all";
				}
				else {
						/** Fills object with the data given in the variable array**/
						const c = fillable.length;

						for (let i = 0; i < c; i++){
								this[fillable[i]] = variables[fillable[i]];
						}
				}
		}

		showData(){
				return this.getData(this.fillable);
		}

		getData(request){
				let ret = {},
						c = request.length;

				for (let i = 0; i < c; i++){
						ret[request[i]] = this[request[i]];
				}
				return ret;
		};
}
module.exports = Model;