const db = require('./dbConfig/init');

module.exports = class Post {
    constructor(data) {
        this.id = data.title;
        this.name = data.name;
        this.content = data.content;
    };

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM posts;')
                const allPosts = result.rows.map(a => ({id: a.id, title: a.title, content: a.content }))
                resolve(allPosts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    }

    
}