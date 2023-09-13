
import express from 'express'
import { addusers, deleteuser, getusers, updateusers } from '../../../user.controller.js'
const router =express.Router()




    router.post('/', addusers)


    router.get('/',getusers)


    router.delete('/',deleteuser)


    router.put('/',updateusers)


export default router 


