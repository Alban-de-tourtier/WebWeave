import express, {Request, Response} from 'express';
import prisma from '../db/prisma';

const router = express.Router();

// GET all experiences content
router.get('/', async (req: Request, res: Response) => {
  const experiences = await prisma.experiences.findMany();
  res.json(experiences);
});

//GET specific type of experiences content
router.get('/:type', async (req: Request, res: Response) => {
  const { type } = req.params
  const experiences = await prisma.experiences.findMany({
    where: { type: type },
  })
  res.json(experiences)
});

// DELETE specific experiences content
router.delete(`/:id`, async (req: Request, res: Response) => {
    const { id } = req.params
    const experiences = await prisma.experiences.delete({
      where: {
        id: id,
      },
    })
    res.json(experiences)
})

//POST specific experiences content
router.post(`/`, async (req: Request, res: Response) => {
  const { title, content, type, image, position } = req.body;

  if (!title || !content || !type || !image || !position) {
      return res.status(400).json({ error: 'Title, content and type are required.' });
  }

  try {
      const result = await prisma.experiences.create({
          data: {
              title,
              content,
              type,
              image,
              position
          },
      });
      res.json(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the document.' });
  }
});

export default router;
