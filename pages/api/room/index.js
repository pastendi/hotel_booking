import connectDB from '@/lib/connectDb'
import Room from '@/models/Room'

export default async function handler(req, res) {
  connectDB()
  if (req.method === 'GET') {
    const rooms = await Room.find()
    res.status(200).json({ rooms })
  }
  if (req.method === 'POST') {
    const room = await Room.create(req.body)
    res.status(201).json({ room })
  }
}
