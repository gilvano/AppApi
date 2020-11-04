import { EntityRepository, Repository } from 'typeorm';
import { LocalEntrega as LocalEntrega } from '../models/local-entrega';

@EntityRepository(LocalEntrega)
export default class LocalEntregaRepository extends Repository<LocalEntrega> {
  public async findByDescricaoLocal(descricao: string): Promise<LocalEntrega[]> {
    return this.find({
      where: {
        descricao,
      },
    });
  }
}