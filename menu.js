
import express from 'express';
import Menu from '../models/Menu.js';
const r=express.Router();
r.get('/',async(req,res)=>res.json(await Menu.find()));
r.post('/',async(req,res)=>res.json(await Menu.create(req.body)));
export default r;
