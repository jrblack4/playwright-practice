import knex from "./knex";

export async function selectOne(table:string, where: object = {}): Promise<any> {
  const record = await knex(table).where(where).limit(1).first();
  return record;
}

export async function selectAll(table:string, where: object = {}): Promise<any[]> {
  const records: any[] = await knex(table).where(where);
  return records;
}
