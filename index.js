/*
ЧАСТЬ 1
Создать два потока: чтение и запись файла.
Используя crypto.createHash() вычислить md5 читаемых данных.
Результат вывести в консоль и записать в файл.
Использовать pipe()
*/

const fs = require("fs");
const crypto = require('crypto');

const input = fs.createReadStream("data.txt");
const output = fs.createWriteStream("md5.txt");

input.pipe(crypto.createHash('md5').setEncoding('hex')).pipe(process.stdout);
input.pipe(crypto.createHash('md5').setEncoding('hex')).pipe(output);