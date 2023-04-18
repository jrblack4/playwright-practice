import { selectOne, selectAll } from "../../../../lib/db/select";

export class DataFactory {
  public async selectOne(table: string, where: object = {}): Promise<any> {
    return await selectOne(table, where);
  }

  public async selectAll(table: string, where: object = {}): Promise<any[]> {
    return await selectAll(table, where);
  }
}
