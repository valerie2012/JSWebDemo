const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.
const knex = Knex({
  client: 'mysql',
  debug: true,
  //   useNullAsDefault: true,
  connection: {
    //socketPath: '/Users/valerieyeo/.bitnami/stackman/machines/xampp/volumes/root/var/mysql/mysql.sock',
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nameregister'
  }
});
//knex.select().from('names').then(function(data){console.log('check db connection',data)})
// Give the knex instance to objection.
Model.knex(knex);

// User model.

class User extends Model {
  static get tableName() {
    return 'names';
  }

  static get relationMappings() {
    return {

    };
  }

  static get idColumn() {
    return 'ID';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['Name'],

      properties: {
        ID: { type: 'integer' },
        Name: { type: 'string', minLength: 1, maxLength: 255 },
      }
    };
  }

}

module.exports = User;



