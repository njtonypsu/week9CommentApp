$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var countItem = 0

function addComment(){
	var newName = document.getElementById('name').value
	var newNameText = document.createTextNode('Name : ' + newName)
	var newComment = document.getElementById('comment').value
	// Check whether there are real contents in the comment.
	// If no actual contents, it is not posted.
	if (newComment == '') {
		alert('There is no content in this comment. It will not be posted.')
		return
	}
	var newCommentText = document.createTextNode(newComment)
	var openCommentText = document.createTextNode('Comment :')
	var closeCommentText = document.createTextNode('----------------------------------------')
	// console.log(newNameText)
	// console.log(newCommentText)
	// console.log(openCommentText)

	countItem = countItem + 1
	var countItemString = countItem.toString()
	// Adding name to the comment list
	var add1 = document.getElementById('listComment')
	var newLi = document.createElement('li')
	// newLi.setAttribute('class', countItemString)
	newLi.appendChild(newNameText)
	var newBr = document.createElement('br')
	newLi.appendChild(newBr)

	// Adding opening text "Comment :" to the comment list
	// var newLi = document.createElement('li')
	// newLi.setAttribute('class', countItemString)
	newLi.appendChild(openCommentText)
	var newBr = document.createElement('br')
	newLi.appendChild(newBr)
	
	// Adding comment to the comment list
	// var newLi = document.createElement('li')
	// newLi.setAttribute('class', countItemString)
	newLi.appendChild(newCommentText)
	var newBr = document.createElement('br')
	newLi.appendChild(newBr)
	newLi.setAttribute('class', countItemString)
	
	add1.appendChild(newLi)

	// Adding Hide button to the comment list
	var newButton = document.createElement('button')
	var newButtonText = document.createTextNode('Hide/Restore This Comment')
	newButton.appendChild(newButtonText)
	newButton.setAttribute('type','button')
	newButton.setAttribute('value', countItemString)
	newButton.setAttribute('onclick','toggleComment(value)')
	add1.appendChild(newButton)
	var newBr = document.createElement('br')
	add1.appendChild(newBr)
	
	// Adding divider line to the comment list
	// var newLi = document.createElement('li')
	// newLi.setAttribute('class', countItemString)
	add1.appendChild(closeCommentText)
	var newBr = document.createElement('br')
	add1.appendChild(newBr)
	

	// console.log(newButton.getAttribute('class'))
	// console.log(newLi.getAttribute('class'))

	document.getElementById('name').value = ''
	document.getElementById('comment').value = ''
}

function toggleComment(value) {
	// console.log(value)
	var checkString = 'li.' + value.toString()
	$(checkString).toggle()
}

// $(document).ready(function(){
// 	$('button.hideText').click(function(){
// 		$('li').hide()
// 	})
// })