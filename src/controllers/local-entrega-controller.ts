import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { LocalEntrega as LocalEntrega } from "../models/local-entrega";

class LocalEntregaController {
  static listAll = async (req: Request, res: Response) => {
    const localEntregaRepository = getRepository(LocalEntrega);
    const locaisEntrega = await localEntregaRepository.find({
      select: ["id", "descricao"], 
    });

    res.send(locaisEntrega);
  };

  static getOneById = async (req: Request, res: Response) => {

    const id: number = Number(req.params.id);

    const localEntregaRepository = getRepository(LocalEntrega);
    try {
      const localEntrega = await localEntregaRepository.findOneOrFail(id, {
        select: ["id", "descricao"], 
      });
      res.send(localEntrega);
    } catch (error) {
      res.status(404).send("Local de entrega não encontrado");
    }
  };

  static newLocalEntrega = async (req: Request, res: Response) => {
    let { descricao } = req.body;
    let localEntrega = new LocalEntrega();
    localEntrega.descricao = descricao;
  

    const errors = await validate(localEntrega);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    const localEntregaRepository = getRepository(LocalEntrega);
    try {
      await localEntregaRepository.save(localEntrega);
    } catch (e) {
      res.status(409).send();
      return;
    }

    res.status(201).send("Local criado!");
  };

  static editLocalEntrega = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { descricao } = req.body;

    const localEntregaRepository = getRepository(LocalEntrega);
    let localEntrega;
    try {
      localEntrega = await localEntregaRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send("Local de entrega não encontrado!");
      return;
    }

    localEntrega.descricao = descricao;
    const errors = await validate(localEntrega);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    res.status(204).send();
  };

  static deleteLocalEntrega = async (req: Request, res: Response) => {
    const id = req.params.id;
    const localEntregaRepository = getRepository(LocalEntrega);
    let localEntrega: LocalEntrega;
    try {
      localEntrega = await localEntregaRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send("Local de entrega não encontrado!");
      return;
    }
    localEntregaRepository.delete(id);

    res.status(204).send();
  };
}

export default LocalEntregaController;
