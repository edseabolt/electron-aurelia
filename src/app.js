import fs from 'fs';

export default class App {
	attached() {
		fs.readFile('./message.txt', (err, data) => {
			this.message = data.toString();
		});
	}
}
