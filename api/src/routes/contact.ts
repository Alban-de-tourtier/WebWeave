import express, {Request, Response} from 'express';
import prisma from '../db/prisma';

const router = express.Router();

// GET all contact content
router.get('/', async (req: Request, res: Response) => {
  const contact = await prisma.contact.findMany();
  res.json(contact);
});

//GET specific type of contact content
router.get('/:type', async (req: Request, res: Response) => {
  const { type } = req.params
  const contact = await prisma.contact.findMany({
    where: { type: type },
  })
  res.json(contact)
});

// DELETE specific contact content
router.delete(`/:id`, async (req: Request, res: Response) => {
    const { id } = req.params
    const contact = await prisma.contact.delete({
      where: {
        id: id,
      },
    })
    res.json(contact)
})

//POST specific contact content
router.post(`/`, async (req: Request, res: Response) => {
  const { title, content, type, image, position } = req.body;

  if (!title || !content || !type || !image || !position) {
      return res.status(400).json({ error: 'Title, content and type are required.' });
  }

  try {
      const result = await prisma.contact.create({
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
