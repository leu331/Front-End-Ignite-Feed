import express, {Request, Response, NextFunction, ErrorRequestHandler} from "express"
import "express-async-errors"
import { routes } from "./routes"
import { AppError } from "../utils/App.Error"

const PORT = 3333
const app = express()

app.use(express.json())
app.use(routes)



app.use(((error: any, request: Request, response: Response, _:NextFunction ) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message });
    }
    
    return response.status(500).json({AppError: "eerroo"})
    return
}) as ErrorRequestHandler)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))