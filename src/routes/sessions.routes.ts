import { Router } from 'express'
import AuthenticateUserService from '../services/AuthenticateUserService'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
  const { email, password } = request.body

  const authenticate = new AuthenticateUserService()

  const { user, token } = await authenticate.execute({
    email,
    password
  })

  return response.send({ user, token })
})

export default usersRouter
