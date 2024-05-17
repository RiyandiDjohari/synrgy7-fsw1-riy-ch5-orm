import { Router } from "express"
import articlesRouter from "./articlesRouter";
import commentsRouter from "./commentsRouter"

const router = Router();

router.use('/articles', articlesRouter)
router.use('/comments', commentsRouter)

export default router;