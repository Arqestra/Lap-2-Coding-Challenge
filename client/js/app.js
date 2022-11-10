const e = require("express");

const form = document.querySelector('button.btn')
form.addEventListener('click', publish)


function display() {
    fetch('http://localhost:3000/posts/',)
    .then(resp => resp.json())
    .then(data => {
        let post = data.posts
        let container = document.createElement('div');
        container.id = post[i].id;
        container.classname = "container";
        let title = document.createElement('h1');
        title.id = "title";
        title.textContent = posts[i].title
        let name = document.createElement('h2');
        name.id = "name";
        name.textContent = posts[i].name
        let content = document.createElement('p');
        content.id = "content";
        content.textContent = posts[i].content;

        container.append(title)
        container.append(name)
        container.append(content)

    })
}

display()

async function publish() {
    // const inputTitle = document.querySelector('#title');
    // const inputName = document.querySelector('#name');
    // const inputContent = document.querySelector('#story');
    e.preventDefault();

    const postData = {
        title: e.target.title.value,
        name: e.target.name.value,
        content: e.target.content.value
    };

    const options = {
        method: "POST",
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .then(appendPost)
        .then(() => e.target.reset())
        .catch(console.warn)
};

function appendPost(data) {
    data.post(appendPost);
};



    // e.preventDefault();
    // try {
    //     const options = {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(
    //             {title: inputTitle.value, name: inputName.value, content: inputContent.value})
    //     }

    //     const response = await fetch('http://localhost:3000/posts/', options);
    //     const {id, err} = await response.json()
    //     if(err) {
    //         throw Error(err)
    //     } else {
    //         display 
    //     }
    // } catch (err) {
    //     console.warn(err);
    // }      


        
        
