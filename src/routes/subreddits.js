import {MongoClient} from 'mongodb'

export default (req, res, next) => {
	MongoClient.connect(process.env.MONGO_URI, (err, client) => {
		const db = client.db('sentimentbot');

		const {
			direction,
			page: _page
		} = req.query;

		const rpp = 20;
		const page = _page-1;
		const sort = direction === 'asc' ? 1 : -1;

		db.collection('subreddits')
			.find({})
			.skip(page * rpp)
			.limit(20)
			.sort({score: sort})
			.toArray()
			.then(results => {
				res.json(results)
			})
			.catch(e => {
				res.status(500)
			})
	})
}