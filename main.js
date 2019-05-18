function testPurposes() {
    alert('This is an alert! Hey!');
}

let doorIsOpen= true;

function toggleDoor() {
    const door= document.getElementById('door');

    if (doorIsOpen) {
        door.src= 'img/close.jpg.png';
        doorIsOpen= false;
    } else {
        door.src= 'img/open.jpg.png';
        doorIsOpen= true;
    }
}