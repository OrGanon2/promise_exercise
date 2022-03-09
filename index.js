const posts = [  
   {title: 'post 1', body:'this is post 1'},
   {title:'post 2', body:'this is post 2'},
]
 

function CreatePost(post){
    return new Promise((reslove,reject) => {
        setTimeout(() => {
            posts.push(post);
            reslove();
        }, 3000);
    }
    )
}
function getPosts(){
    let output = '';
    posts.forEach((post) => {
        output += `<li>${post.title}</li>`;

    });
    document.body.innerHTML = output;
    console.log(output)

}
async function init(){

    await CreatePost({title: ' post 3', body:`this is post 3`})
    getPosts();
   

}
init();
