import { Request, Response } from 'express';

export class WeaponController {
  public static async getSummaryList(req: Request, res: Response) {
    res.status(200).send([])
  }

  public static async getList(req: Request, res: Response) {
    res.status(200).send([])
  }

  public static async getDetails(req: Request, res: Response) {
    res.status(200).send({})
  }
}