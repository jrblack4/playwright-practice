import knex from './knex';

export class Select {
  async one(table: string, where: object = {}): Promise<any> {
    const record = await knex(table).where(where).limit(1).first();
    return record;
  }

  async all(table: string, where: object = {}): Promise<any[]> {
    const records: any[] = await knex(table).where(where);
    return records;
  }
}