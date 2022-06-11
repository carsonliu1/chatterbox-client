// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),
  _selectedRoom: '',
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  update: () => {
    //iterate over all messages
    //  add room property of messages to data
    Messages.retrieve().forEach(function(currentMessage) {
      Rooms._data.add(currentMessage.roomname);
    });
    RoomsView.render()
  },

  add: (room) => {
    Rooms._data.add(room);
    Rooms._selectedRoom = room
  },

  retrieve: () => {
    let roomArr = Array.from(Rooms._data)
    return roomArr.sort();
    //{1, 2, 3} ---> [1, 2, 3]
  }
};
