import { Router } from "express"
import { getComments, getCommentById, createComment, deleteCommentById, updateComment } from "../service/commentsService"

const router = Router();

router.get('/', getComments)
router.get('/:id', getCommentById)
router.post('/', createComment)
router.delete('/:id' ,deleteCommentById)
router.patch('/:id', updateComment)

export default router;
