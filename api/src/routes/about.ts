import express, {Request, Response} from 'express';
import prisma from '../db/prisma';
import bodyParser from 'body-parser';

const router = express.Router();

// GET all users
router.get('/', async (req: any, res: any) => {
  const about = await prisma.about.findMany();
  res.json(about);
});

router.delete(`/:id`, async (req, res) => {
    const { id } = req.params
    const about = await prisma.about.delete({
      where: {
        id: id,
      },
    })
    res.json(about)
})

// router.post('/', async (req: Request, res: Response) => {
//     console.log(req.body);
//     await prisma.about.create({
//     data: req.body,
//   })
//   res.sendStatus(200)
// })


export default router;
