/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

/*
//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}
*/

/*
///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {
  $('#createButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      //current key exists, do something error-handle-y
    } else {
      createItem(currentKey, currentValue);
    }
  });

  $('#updateButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      updateItem(currentKey, currentValue);
    } else {
      //current key doesnt exist, do stuff
    }
  });
});
*/




// add event listener to submit button and runs saveTask function
document.getElementById('todolist').addEventListener('submit', saveTask);

// get input from html page text box and sets current time as item id
var saveTask = function(event) {
	// declare d variable and set = date
	var d = new Date();
	  event.preventDefault();
	var getId =  d.getTime();
    // get input from html page
	var getInput = document.getElementById("taskbox").value;
	// store id and input in task obj
	var taskObj = {id: getId, task: getInput};
  
   // if task list does not exist
   if (localStorage.getItem('taskList') === undefined) {
	     // create empty task array
	     var taskList = [];
		 // push task obj into task array
		 taskList.push(taskObj);
		 // store task array in local storage after stringify
		 localStorage.setItem('taskList', JSON.stringify(taskList));
   } else {
	   // if task array does exist get from storage and parse
	   var taskList = JSON.parse(localStorage.getItem('taskList'));
	   // push task obj into task array
	   taskList.push(taskObj);
	   // update local storage
	   localStorage.setItem('taskList', JSON.stringify(taskList));
   };
      
	    document.getElementById('todolist').reset();
    	getTask();

};

// get task list from storage and manipulate html page
var getTask = function(event) {
	// get task list from storage and parse
	var taskList = JSON.parse(localStorage.getItem('taskList'));
	// declare showTask variable set to html id for task section
	var showTask = document.getElementById('showTaskList');
	// manipulate html page and 
	// when item deleted not to refeash page.
	showTaskList.innerHTML = ''; 
	// iterate through task array
	for (var i = 0; i < taskList.length; i++) {
	  // declare id and text variables and set to obj values
	  var id = taskList[i][id];
	  var taskText = taskList[i][task];
	  // add task text to task section
	  showTaskList.innerHTML +=  
	  '<hr>' +     
	  '<p>' + taskText + '</p><br />' +
	  '<a href="#" onclick="deleteTask(\'' + id + '\')">Delete</a>';
	};
};

// delete task w/ id from task array     
var deleteTask = function(id) {
	// get task array from storage and parse
	var taskList = JSON.parse(localStorage.getItem('taskList'));
	// iterate through task list
	for (var i = 0; i < taskList.length; i++) {
		// if id of element of array matches id variable
		if (taskList[i].id === id) {
			// remove from array
			taskList.splice(i,1);
		};
	};
        // reset local storage
		localStorage.setItem('taskList', JSON.stringify(taskList));
		getTask();
};

/*
saying cannot read 'length' of null on line 125.
taskList is always null. Not sure why.
possibly onload event in html file.
*/
