
function tinyFriend(value) {

    let smallName = value[0].length;
    let smallestName;
    for (let i = 0; i < value.length; i++) {
        if (value[i].length < smallName) {
            smallName = value[i].length;
            smallestName = value[i];
        }
    }

    return smallestName;
}

let friendsName = ['Tamal', 'Chaity', 'Mou', 'Arin', 'Shakib'];

let myFriend = tinyFriend(friendsName);

console.log('My Tiny Friends name: ', myFriend);
