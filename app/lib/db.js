const { Pool } = require('pg');
const pool = new Pool({
  connectionString: '',
});
export default pool;
