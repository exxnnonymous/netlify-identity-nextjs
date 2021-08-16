// exports.handler = async () => {

// console.log('function run')

// const data = { name: "Halo", age:35, job:'plumber'}

// return {
//     statusCode: 200,
//     body: JSON.stringify(data)
// }

// }


exports.handler = async (event, context) => {

const guides = [
    {title: 'Best all Zelda Bosses Like a Boss', author: 'mario'},
    {title: 'Mario Kart Shortcuts You Never Know Existed', author: 'luigi'},
    {title: 'Ultimate Street Fighter Guide', author: 'chun-li'},
];

if (context.clientContext.user){
return {
    statusCode: 200,
    body: JSON.stringify(guides)
}
}

return {
    statusCode: 401,
    body: JSON.stringify({message: 'You must be logged to see this page'})
}

}


