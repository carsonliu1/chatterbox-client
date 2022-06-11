// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  update: (data, cb ) => {
    let count = 0
    for (let obj of data) {
      Messages._data[count] = Messages.format(obj)
      // console.log(Messages._data[count], 'inside')
      count++
    }
    cb(Messages._data)
   },
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
   format: (obj) => {
    obj.text = obj.text || ""
    obj.username = obj.username || ""
    obj.updated_at = obj.updated_at || new Date()
    obj.roomname = obj.roomname || "lobby"
    return obj
   },

   retrieve: () => {
    return Object.values(Messages._data)
   },
};
