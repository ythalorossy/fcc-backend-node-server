console.log(process.argv.slice(2).reduce(function (acc, cur) {
    return Number(acc) + Number(cur);
}));