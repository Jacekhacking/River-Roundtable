const { Pool } = require('pg');
const pool = new Pool({
  connectionString:
    'postgresql://postgres:uEfAxLDJKQgEy6KuhcdF@containers-us-west-56.railway.app:6199/railway',
});
export default pool;
