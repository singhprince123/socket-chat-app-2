//make connection

const socket = io.connect('http://localhost:4000');

// query dom

const message = document.getElementById('message')
const handle = document.getElementById('handle')
const send = document.getElementById('send')
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')




message.addEventListener('keypress' , ()=> {
    socket.emit('typing', handle.value)
})
//emit events
console.log("message =", message)
console.log('handle =', handle)
console.log('send =', send)
console.log('output =', output)

send.addEventListener('click', ()=> {
    console.log('send')
    socket.emit('chat' , {
        message: message.value,
        handle: handle.value
    });
    message.value = ""
});

//listen for events

socket.on('chat', (data)=> {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </storng>' + data.message + '</p>';
})

socket.on('typing', (data) => {
     feedback.innerHTML = "<p> <em>"+ data + ' is typing a message..</em></p>'
})