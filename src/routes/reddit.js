import {MongoClient} from 'mongodb'

export default (req, res, next) => {
	MongoClient.connect(process.env.MONGO_URI, (err, client) => {
		const db = client.db('sentimentbot');

		db.collection('reddit')
			.find({})
			.toArray()
			.then(results => {
				res.json(results)
			})
			.catch(e => {
				res.status(500)
			})
	})
}