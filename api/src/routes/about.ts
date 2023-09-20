import express, {Request, Response} from 'express';
import prisma from '../db/prisma';

const router = express.Router();

// GET all about content
router.get('/', async (req: Request, res: Response) => {
  const about = await prisma.about.findMany();
  res.json(about);
});

//GET specific type of about content
router.get('/:type', async (req: Request, res: Response) => {
  const { type } = req.params
  const about = await prisma.about.findMany({
    where: { type: type },
  })
  res.json(about)
});

// DELETE specific about content
router.delete(`/:id`, async (req: Request, res: Response) => {
    const { id } = req.params
    const about = await prisma.about.delete({
      where: {
        id: id,
      },
    })
    res.json(about)
})

//POST specific about content
router.post(`/`, async (req: Request, res: Response) => {
  const { title, content, type } = req.body;

  if (!title || !content || !type) {
      return res.status(400).json({ error: 'Title, content and type are required.' });
  }

  try {
      const result = await prisma.about.create({
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
