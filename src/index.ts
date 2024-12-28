import app from './app';
import { dbConnection, PORT } from './config';
import { Animal1 } from './domain/animal';
import { Product1 } from './domain/product';
import { Person1, User } from './domain/user';

(async () => {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});

	//Person2 es la instancia de class User
	const Person2 = new User({
		name: 'Lolo',
		email: 'lolito@gmail.com',
		password: '112233'
	})
	Person1.create()
	Person2.create()

	Product1.create()
	Animal1.create()
	Animal1.saludar()
	// await dbConnection.default();
})();
