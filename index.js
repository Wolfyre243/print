// Very crucial code

function print(...args) {
    const str = args.join('');
    console.log(str);
}

module.exports = print;