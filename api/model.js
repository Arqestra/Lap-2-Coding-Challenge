const db = require('./dbConfig/init');

module.exports = class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.content = data.content;
    };

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM posts;')
                const allPosts = result.rows.map(a => new Post(d))
                resolve(allPosts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query('SELECT * FROM posts WHERE id = $1;', [ id ]);
                let post = new Post(postData.rows[0]);
                resolve(post);
            } catch (err) {
                reject('Post not found');
            };
        });
    };

    static create(title, name, content){
        return new Promise (async (resolve, reject) => {
            try {
                let dogData = await db.query(`INSERT INTO dogs (title, name, content) VALUES ($1, $2) RETURNING *;`, [ title, name, content ]);
                let newDog = new Dog(dogData.rows[0]);
                resolve (newDog);
            } catch (err) {
                reject('Error creating dog');
            }
        });
    }
}