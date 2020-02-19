import { join } from 'path'

export const getError = (req, res, next)=>{
    res.status(404).sendFile(join(__dirname, '../', 'views', '404.html'))
}