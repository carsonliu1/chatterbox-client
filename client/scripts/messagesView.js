// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.click(MessagesView.handleClick)
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty()
    let arr = Messages.retrieve(data)
    if (Rooms._selectedRoom === '') {
      for (let value of arr) {
        MessagesView.renderMessage(value)
      }
    } else {
      let filteredRooms = arr.filter((obj) => {
        return obj.roomname === Rooms._selectedRoom
      })
        for (let value of filteredRooms) {
          MessagesView.renderMessage(value)
      }
    }
  },

  renderMessage: function(message) {
    //TODO: Render a message
    let $message = MessageView.render(message)
    MessagesView.$chats.append($message)
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    let name = event.target.innerHTML
    Friends.toggleStatus(name)
  }
};