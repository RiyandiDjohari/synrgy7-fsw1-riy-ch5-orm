import { Router } from "express"
import { getArticles, getArticleById, createArticle, deleteArticleById, updateArticle } from "../service/articlesService"

const router = Router();

router.get('/', getArticles)
router.get('/:id', getArticleById)
router.post('/', createArticle)
router.delete('/:id' ,deleteArticleById)
router.patch('/:id', updateArticle)

export default router;
