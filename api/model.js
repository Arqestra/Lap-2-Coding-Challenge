const db = require('./dbConfig/init');

module.exports = class Post {
    constructor(data) {
        this.id = data.title;
        this.name = data.name;
        this.content = data.content;
    };
}