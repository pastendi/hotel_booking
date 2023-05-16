import connectDB from '@/lib/connectDb'
import Room from '@/models/Room'

export default async function handler(req, res) {
  connectDB()
  if (req.method === 'PATCH') {
    const { id } = req.query
    const room = await Room.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ room })
  }
  if (req.method === 'GET') {
    const { id } = req.query
    const room = await Room.findById(id)
    res.status(200).json({ room })
  }
  if (req.method === 'DELETE') {
    const { id } = req.query
    const room = await Room.findByIdAndDelete(id)
    res.status(200).json({ room })
  }
}
