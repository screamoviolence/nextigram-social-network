import  express  from "express";
import { getProfile, updateProfile } from "../controllers/profile.js";
import auth from '../middleware/auth.js '


const router = express.Router()

router.get('/',auth, getProfile)
router.patch('/',auth, updateProfile)


export default router