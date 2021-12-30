var list = document.getElementById('list')
var TodoInp = document.getElementById('todoInp')

function addtodo() {

    var text = todoInp.value
    var todotextNode = document.createTextNode(text)
    var lii = document.createElement('li')
    lii.setAttribute('class', 'todoList')
    lii.appendChild(todotextNode)
    list.appendChild(lii)

    var deleteButton = document.createElement('button')
    deleteButton.setAttribute('onclick', 'deletedTodo(this)')
    var deleteTextNote = document.createTextNode('Delete')
    deleteButton.appendChild(deleteTextNote)
    lii.appendChild(deleteButton)

    var editButton = document.createElement('button')
    editButton.setAttribute('onclick', 'editTodo(this)')
    var editText = document.createTextNode('edit')
    editButton.appendChild(editText)
    lii.appendChild(editButton)

}
function deletedTodo(element) {
    element.parentNode.remove()
    console.log(element)
}

function editTodo(element) {
    element.parentNode.firstChild.nodeValue = prompt('editValue', element.parentNode.firstChild.nodeValue)
    console.log(element.parentNode.childNodes[0])
}
function deleteAll() {
    list.innerHTML = ''
}