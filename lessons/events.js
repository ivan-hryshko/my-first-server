const Emitter = require('events')

const emitter = new Emitter()

emitter.on('my-message', (data, second) => {
  console.log('Ви прислали: ' + data);
  console.log('Другий аргумент: ' + second);
})

const MESSAGE = process.env.message || ''

if (MESSAGE) {
  emitter.emit('my-message', MESSAGE, 123)
} else {
  emitter.emit('my-message', 'No message send')
}