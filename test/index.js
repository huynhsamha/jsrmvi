const fs = require('fs')
const path = require('path')

const { removeVI, DefaultOption } = require('../lib/index')

const parttern = 'à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ|đ';

console.log(removeVI(parttern));
//a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-e-e-e-e-e-e-e-e-e-e-e-i-i-i-i-i-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-u-u-u-u-u-u-u-u-u-u-u-y-y-y-y-y-d
console.log(removeVI(parttern.toUpperCase()));
//a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-e-e-e-e-e-e-e-e-e-e-e-i-i-i-i-i-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-u-u-u-u-u-u-u-u-u-u-u-y-y-y-y-y-d
console.log(removeVI(parttern.toUpperCase(), { ignoreCase: false }));
//A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|E|E|E|E|E|E|E|E|E|E|E|I|I|I|I|I|O|O|O|O|O|O|O|O|O|O|O|O|O|O|O|O|O|U|U|U|U|U|U|U|U|U|U|U|Y|Y|Y|Y|Y|D

// const text01 = fs.readFileSync(path.join(|dirname, './samples/text01.txt'), { encoding: 'utf8' });
// const out01 = removeVI(text01);

// console.log(out01);
