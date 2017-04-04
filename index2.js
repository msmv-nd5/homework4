/*
ЧАСТЬ 2
Расширить предыдущие решние используя stream.Transform
Реализовать свой класс, который будет конвертировать результат crypto.createHash() (бинарные данные - хеш-сумма) в hex формат.
Результат вывести в консоль и записать в файл.
Использовать pipe()
*/

const fs = require("fs");
const crypto = require('crypto');
const stream = require('stream');

class CryptoTransform extends stream.Transform {

	constructor(options={}) {
			super(options);
			this.crypto = crypto.createHash('md5')
	}

	_transform(chunk, encoding, callback) {
		this.push(this.crypto.update(chunk).digest("hex"));
		callback();
	}

}


const input = fs.createReadStream("data.txt");
const output = fs.createWriteStream("md5.txt");


let result = input.pipe(new CryptoTransform());

result.pipe(process.stdout);
result.pipe(output);
