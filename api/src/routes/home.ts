import express, {Request, Response} from 'express';
import prisma from '../db/prisma';

const router = express.Router();

// GET all Home content
router.get('/', async (req: Request, res: Response) => {
  const home = await prisma.home.findMany();
  res.json(home);
});

//GET specific type of Home content
router.get('/:type', async (req: Request, res: Response) => {
  const { type } = req.params
  const home = await prisma.home.findMany({
    where: { type: type },
  })
  res.json(home)
});

// DELETE specific Home content
router.delete(`/:id`, async (req: Request, res: Response) => {
    const { id } = req.params
    const home = await prisma.home.delete({
      where: {
        id: id,
      },
    })
    res.json(home)
})

//POST specific Home content
router.post(`/`, async (req: Request, res: Response) => {
  const { title, content, type } = req.body;

  if (!title || !content || !type) {
      return res.status(400).json({ error: 'Title, content and type are required.' });
  }

  try {
      const result = await prisma.home.create({
          data: {
              title,
              content,
              type,
          },
      });
      res.json(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the document.' });
  }
});

export default router;
