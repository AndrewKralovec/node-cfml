/* globals require, exports */
// jshint devel:true, curly: false, asi:true, -W084, -W085, -W061
const fs = require('fs')
const tagMatch = /<[\/]?cfblock[^>]*>/gi

exports.afterProcess = (tag, str) => {
	if (tag.attributes.template.indexOf('#') === -1) {
        // const stream = fs.createReadStream(path, 'utf8') 
        let contents = []
        contents = fs.readFileSync(tag.attributes.template, 'utf8')
            .split(tagMatch)

        if (contents.length > 1)
            contents.splice( 1, 0, str)
        else
            contents = [str]

        return contents.join('').trim()
	}
}