"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultOption = exports.removeVI = void 0;
var PartternLowercase = [
    { char: 'a', regex: /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g },
    { char: 'e', regex: /è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g },
    { char: 'i', regex: /ì|í|ị|ỉ|ĩ/g },
    { char: 'o', regex: /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g },
    { char: 'u', regex: /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g },
    { char: 'y', regex: /ỳ|ý|ỵ|ỷ|ỹ/g },
    { char: 'd', regex: /đ/g },
];
var PartternUppercase = [
    { char: 'A', regex: /À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g },
    { char: 'E', regex: /È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g },
    { char: 'I', regex: /Ì|Í|Ị|Ỉ|Ĩ/g },
    { char: 'O', regex: /Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g },
    { char: 'U', regex: /Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g },
    { char: 'Y', regex: /Ỳ|Ý|Ỵ|Ỷ|Ỹ/g },
    { char: 'D', regex: /Đ/g },
];
var specialCharRegex = /!|@|%|\^|\*|\(|\)|\+|\-|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_|\|/g;
var DefaultOption = {
    ignoreCase: true,
    replaceSpecialCharacters: true,
    concatBy: '-',
};
exports.DefaultOption = DefaultOption;
exports.removeVI = function (text, options) {
    if (text === void 0) { text = ''; }
    if (options === void 0) { options = DefaultOption; }
    var _a = options.ignoreCase, ignoreCase = _a === void 0 ? DefaultOption.ignoreCase : _a, _b = options.replaceSpecialCharacters, replaceSpecialCharacters = _b === void 0 ? DefaultOption.replaceSpecialCharacters : _b, _c = options.concatBy, concatBy = _c === void 0 ? DefaultOption.concatBy : _c;
    var res = text;
    if (ignoreCase) {
        res = res.toLowerCase();
    }
    PartternLowercase.forEach(function (t) {
        res = res.replace(t.regex, t.char);
    });
    if (!ignoreCase) {
        PartternUppercase.forEach(function (t) {
            res = res.replace(t.regex, t.char);
        });
    }
    if (replaceSpecialCharacters) {
        var c = concatBy;
        res = res
            .replace(specialCharRegex, c) // replace special characters to c
            .replace(new RegExp("\\" + c + "+\\" + c, 'g'), c) // replace repeated c to single c (e.g. `a---b` to `a-b`)
            .replace(new RegExp("^\\" + c + "+|\\" + c + "+$", 'g'), ''); // remove begin and end characters with c
    }
    return res;
};
//# sourceMappingURL=index.js.map