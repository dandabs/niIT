import mysql from 'serverless-mysql';

const db = mysql({
    config: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_FILE,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    }
});

export default async function execute({ q, v }) {
    try {
        const res = await db.query(q, v);
        await db.end();
        return res;
    } catch (error) {
        return { error };
    }
}
