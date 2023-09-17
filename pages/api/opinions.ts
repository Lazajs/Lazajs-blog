import type { NextApiRequest, NextApiResponse } from 'next'
import connect from 'db/connect'
import { Opinion } from 'db/models/Opinion'

type Data = {
  name: string
}

type Error = {
  error: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {

  if (req.method === 'POST') {
    const connection = await connect()
    const { name, content } = req.body

    console.log(name, content)

    try {
      const opinion = new Opinion({
        name,
        content
      })
      
      await opinion.save()
    } catch (e) {
      console.log(e)
      connection && connection.disconnect()
      res.status(500).json({ error: 'Something went wrong' })
    } 

    connection && connection.disconnect()
    res.status(201).end()
  }
}