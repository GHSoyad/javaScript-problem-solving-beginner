// Write a function called bestFriend(). The function will take an array as input parameter. The array will have a list of your friends name. Return the longest friend name.


function bestFriend(array) {

    let longestName = array[0];

    for (i = 0; i < array.length; i++) {

        let friend = array[i];

        if (friend.length > longestName.length) {
            longestName = friend;
        }
    }

    return longestName;
}

let friends = ["Azil", "Bazil", "Cazito", "Dazine", "Ezineto", "Fazil"]

console.log(bestFriend(friends), "is my bestfriend!");