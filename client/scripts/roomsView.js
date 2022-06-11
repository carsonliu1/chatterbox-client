// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
    let listOfRooms = Rooms._data
    listOfRooms.forEach((ele) => {
      renderRoom(ele)
    })

  },

  renderRoom: function(roomname) {
    let $roomname = $('<option></option').val(roomname)
    $roomname.text(roomname)
    RoomsView.$select.append($roomname)
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
