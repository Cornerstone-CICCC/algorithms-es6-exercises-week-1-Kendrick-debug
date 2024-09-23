/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
    name: "kendrick", 
    friendsCount: 14,
    messages: ["Hello world!", "My name is Kendrick", "And it's nice metting you all"],
    
    postMessage: function(message) {
        this.messages.push(message);
    },
    
    deleteMessage: function(i) {
        if (i >= 0 && i < this.messages.length) {
            this.messages.splice(index, 1);
        } else {
            console.log("i is invalid.");
        } //managed 
    },
    
    addFriend: function() {
        this.friendsCount++;
    },
    
    removeFriend: function() { //so now i go to the friends remove section
        if (this.friendsCount > 0) {
            this.friendsCount--;
        } else {
            console.log("You have no friends to remove.");
        }
    }
};


facebookProfile.postMessage("Hello worl!"); 

facebookProfile.deleteMessage(0);

facebookProfile.addFriend();

facebookProfile.removeFriend();
// Don't know what to do here
console.log(facebookProfile.messages, friendsCount)


//could not complete and get the right answer