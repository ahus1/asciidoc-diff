const HtmlDiff = require('htmldiff-js').default;
const fs = require('fs');

var newHtml = fs.readFileSync('bv2-cr3.html', 'utf8');
var oldHtml = fs.readFileSync('bv2-cr1.html', 'utf8');

console.log("starting to compare");

var diffHtml = HtmlDiff.execute(oldHtml, newHtml);

console.log("comparison done");

// adding additional style to make changes highlighted in color (might still be incomplete,
diffHtml = diffHtml.replace("<head>",`<head><style>
del {
    text-decoration: none;
    background-color: #fdb8c0;
}

ins {
    text-decoration: none;
    background-color: #acf2bd;
}

/* just formatting changes */
ins.mod {
    background-color: #fafaa9;
}
</style>`)

fs.writeFile('bv2-diff.html', diffHtml, function (err) {
    if (err) throw err;
    console.log('Saved!');
});


