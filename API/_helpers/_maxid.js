const db = require("./_db");

async function maxID(req) {
      try {
            if(!req) {
                  return 0;
            }
            let pKeySql = `SELECT tc.table_schema, tc.constraint_name, tc.table_name, kcu.column_name
                FROM
                information_schema.table_constraints AS tc
                JOIN information_schema.key_column_usage AS kcu
                ON tc.constraint_name = kcu.constraint_name
                AND tc.table_schema = kcu.table_schema
                JOIN information_schema.constraint_column_usage AS ccu
                ON ccu.constraint_name = tc.constraint_name
                AND ccu.table_schema = tc.table_schema
                WHERE tc.constraint_type = 'PRIMARY KEY' AND tc.table_name = '${req}';`;
            let pKey = await db.query(pKeySql);
            let sql = `SELECT MAX(${pKey.rows[0].column_name}) FROM ${req};`;
            console.log(sql);
            let result = await db.query(sql);
            console.log(result.rows[0].max);
            return result.rows[0].max > null ? Number(result.rows[0].max) + 1 : 1;
      } catch (error) {
            return 0;
      }
}

module.exports = { maxID };