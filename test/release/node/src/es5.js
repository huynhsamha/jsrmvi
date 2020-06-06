const assert = require('assert');
const jsrmvi = require('jsrmvi');
const { removeVI, DefaultOption } = require('jsrmvi');

assert.equal(jsrmvi.removeVI, removeVI);
assert.equal(jsrmvi.DefaultOption, DefaultOption);

console.log(DefaultOption);
/*
{
  ignoreCase: true,
  replaceSpecialCharacters: true,
  concatBy: '-'
}
*/

console.log('Null or empty text:');
console.log('1: ' + removeVI());
console.log('2: ' + removeVI(null));
console.log('3: ' + removeVI(undefined));
console.log('4: ' + removeVI(''));
console.log();
/*
Null or empty text:
1:
2:
3:
4:
*/

const parttern =
  'à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ|đ';

console.log('Lowercase pattern:');
console.log(parttern);
console.log(removeVI(parttern));
console.log();
/*
Lowercase pattern:
à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ|đ
a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-e-e-e-e-e-e-e-e-e-e-e-i-i-i-i-i-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-u-u-u-u-u-u-u-u-u-u-u-y-y-y-y-y-d
*/

console.log('Uppercase pattern');
const upParttern = parttern.toUpperCase();
console.log(upParttern);
console.log(removeVI(upParttern));
console.log(removeVI(upParttern, { ignoreCase: false }));
console.log(removeVI(upParttern, { ignoreCase: false, concatBy: '+' }));
console.log(removeVI(upParttern, { ignoreCase: false, concatBy: ',' }));
console.log(removeVI(upParttern, { ignoreCase: false, replaceSpecialCharacters: false }));
console.log();
/*
Uppercase pattern
À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ
a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-e-e-e-e-e-e-e-e-e-e-e-i-i-i-i-i-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-u-u-u-u-u-u-u-u-u-u-u-y-y-y-y-y-d
A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-E-E-E-E-E-E-E-E-E-E-E-I-I-I-I-I-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-U-U-U-U-U-U-U-U-U-U-U-Y-Y-Y-Y-Y-D
A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,E,E,E,E,E,E,E,E,E,E,E,I,I,I,I,I,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,U,U,U,U,U,U,U,U,U,U,U,Y,Y,Y,Y,Y,D
A+A+A+A+A+A+A+A+A+A+A+A+A+A+A+A+A+E+E+E+E+E+E+E+E+E+E+E+I+I+I+I+I+O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+U+U+U+U+U+U+U+U+U+U+U+Y+Y+Y+Y+Y+D
A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|E|E|E|E|E|E|E|E|E|E|E|I|I|I|I|I|O|O|O|O|O|O|O|O|O|O|O|O|O|O|O|O|O|U|U|U|U|U|U|U|U|U|U|U|Y|Y|Y|Y|Y|D
*/

const text01 =
  'Không người thân, một mình chiến đấu với Covid-19, nam phi công người Anh chấp nhận hôn mê, đặt trọn niềm tin vào bác sĩ Việt Nam.';
console.log('Sentence');
console.log(text01);
console.log(removeVI(text01));
console.log(removeVI(text01, { ignoreCase: false }));
console.log(removeVI(text01, { ignoreCase: false, replaceSpecialCharacters: false }));
console.log(removeVI(text01, { concatBy: '+' }));
console.log(removeVI(text01, { replaceSpecialCharacters: false }));
console.log();
/*
Sentence
Không người thân, một mình chiến đấu với Covid-19, nam phi công người Anh chấp nhận hôn mê, đặt trọn niềm tin vào bác sĩ Việt Nam.
khong-nguoi-than-mot-minh-chien-dau-voi-covid-19-nam-phi-cong-nguoi-anh-chap-nhan-hon-me-dat-tron-niem-tin-vao-bac-si-viet-nam
Khong-nguoi-than-mot-minh-chien-dau-voi-Covid-19-nam-phi-cong-nguoi-Anh-chap-nhan-hon-me-dat-tron-niem-tin-vao-bac-si-Viet-Nam
Khong nguoi than, mot minh chien dau voi Covid-19, nam phi cong nguoi Anh chap nhan hon me, dat tron niem tin vao bac si Viet Nam.
khong+nguoi+than+mot+minh+chien+dau+voi+covid+19+nam+phi+cong+nguoi+anh+chap+nhan+hon+me+dat+tron+niem+tin+vao+bac+si+viet+nam
khong nguoi than, mot minh chien dau voi covid-19, nam phi cong nguoi anh chap nhan hon me, dat tron niem tin vao bac si viet nam.
*/
