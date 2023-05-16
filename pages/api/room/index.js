import connectDB from '@/lib/connectDb'

export default async function handler(req, res) {
  connectDB()
  if (req.method === 'GET') {
    res.status(200).json({ msg: 'hello' })
  }
}
