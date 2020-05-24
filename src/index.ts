/**
 * Author: <Ha Huynh> https://github.com/huynhsamha
 * Github: https://github.com/huynhsamha/jsrmvi
 * NPM Package: https://www.npmjs.com/package/jsrmvi
 */

interface Parttern {
	char: string;
	regex: RegExp;
}

interface Options {
	ignoreCase: boolean;
	replaceSpecialCharacters: boolean;
	concatBy: string;
}

const PartternLowercase: Parttern[] = [
	{ char: 'a', regex: /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g },
	{ char: 'e', regex: /è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g },
	{ char: 'i', regex: /ì|í|ị|ỉ|ĩ/g },
	{ char: 'o', regex: /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g },
	{ char: 'u', regex: /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g },
	{ char: 'y', regex: /ỳ|ý|ỵ|ỷ|ỹ/g },
	{ char: 'd', regex: /đ/g },
];

const PartternUppercase: Parttern[] = [
	{ char: 'A', regex: /À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g },
	{ char: 'E', regex: /È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g },
	{ char: 'I', regex: /Ì|Í|Ị|Ỉ|Ĩ/g },
	{ char: 'O', regex: /Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g },
	{ char: 'U', regex: /Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g },
	{ char: 'Y', regex: /Ỳ|Ý|Ỵ|Ỷ|Ỹ/g },
	{ char: 'D', regex: /Đ/g },
];

const specialCharRegex = /!|@|%|\^|\*|\(|\)|\+|\-|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_|\|/g;

const DefaultOption: Options = {
	ignoreCase: true,
	replaceSpecialCharacters: true,
	concatBy: '-',
};

export const removeVI = (text: string = '', options: Options = DefaultOption) => {
	const {
		ignoreCase = DefaultOption.ignoreCase,
		replaceSpecialCharacters = DefaultOption.replaceSpecialCharacters,
		concatBy = DefaultOption.concatBy,
	} = options;

	let res = text;
	if (ignoreCase) {
		res = res.toLowerCase();
	}
	PartternLowercase.forEach((t) => {
		res = res.replace(t.regex, t.char);
	});
	if (!ignoreCase) {
		PartternUppercase.forEach((t) => {
			res = res.replace(t.regex, t.char);
		});
	}
	if (replaceSpecialCharacters) {
		const c = concatBy;
		res = res
			.replace(specialCharRegex, c) // replace special characters to c
			.replace(new RegExp(`\\${c}+\\${c}`, 'g'), c) // replace repeated c to single c (e.g. `a---b` to `a-b`)
			.replace(new RegExp(`^\\${c}+|\\${c}+$`, 'g'), ''); // remove begin and end characters with c
	}
	return res;
};

export { DefaultOption };
