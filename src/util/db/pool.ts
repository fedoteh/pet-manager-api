import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    });
  

      
pool.connect((err, client, release) => {
    if (err) {
        console.error('Error acquiring client', err.stack);
        return;
    }
    if (client) {       
        client.query('SELECT NOW()', (err, result) => {         
        release();
        if (err) {
            console.error('Error executing query', err.stack);
            return;
        }
        console.log(result.rows);
        });
    }
});   

export default pool;