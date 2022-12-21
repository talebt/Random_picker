
const tags =document.getElementById('tags');
const textarea = document.getElementById('textarea');


textarea.focus()



textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    //console.log(textarea)

})


function createTags(input){
const tag = input.split(',').filter(tage=> tage.trim()!=='').map(tage=>tage.trim())
console.log(tag)

}