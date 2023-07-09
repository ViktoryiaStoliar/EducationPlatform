import { Pool } from 'pg'
const pool = new Pool({
    password: 'Vika+Genya=88',
    port: 5432,
    host: 'localhost',
    user: 'postgres',
    database: 'EducationPlatform'

})

export {pool}