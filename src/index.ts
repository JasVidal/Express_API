import app from './app';
import { dbConnection, PORT } from './config';
import { Person1, User } from './domain/user';

(async () => {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});

	const Person2 = new User({
		name: 'Lolo',
		email: 'lolito@gmail.com',
		password: '112233'
	})
	Person1.create()
	Person2.create()
	// await dbConnection.default();
})();
