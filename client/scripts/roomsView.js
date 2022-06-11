// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on("click", RoomsView.handleClick)
    RoomsView.$select.change(RoomsView.handleChange)
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // when add room is clicked, window should prompt user for room name
    // when room name is inputted, selected room should become added room
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty()
    let listOfRooms = Rooms.retrieve()
    listOfRooms.forEach((ele) => {
      RoomsView.renderRoom(ele)
    })

  },

  renderRoom: function(roomname) {
    let $roomname = $('<option></option>').val(roomname)
    $roomname.text(roomname)
    RoomsView.$select.append($roomname)
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms._selectedRoom = RoomsView.$select.val();
    MessagesView.render()
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let newRoom = prompt('Please enter new room name')
    Rooms.add(newRoom)
    RoomsView.render()
  }

};
