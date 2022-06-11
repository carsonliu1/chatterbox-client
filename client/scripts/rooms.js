// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  uniqueRooms: {},
  selectedRoom: "",
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  update: () => {
    let allMessages = Messages.retrieve();
    for (let obj of allMessages) {
      if (Rooms.uniqueRooms[obj.roomname] === undefined) {
        Rooms.uniqueRooms[obj.roomname] = true;
        Rooms._data.push(obj.roomname);
      }
    }
  },

  add: (room) => {
    //if new room is added, add room to _data
    if (uniqueRooms[room] === undefined) {
      Rooms.uniqueRooms[room] = true;
      Rooms._data.push(room);
      Rooms.selectedRoom = room
    }
  },

  getMyRoom: () => {
    return Rooms.selectedRoom
  }
};

console.log(Rooms._data)