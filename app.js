const socket = new WebSocket(`ws://${location.host}`);
let isTyping = false;

// Initialize CodeMirror
const editor = CodeMirror.fromTextArea(document.getElementById('code'), {
  mode: 'javascript',
  lineNumbers: true,
  theme: 'default'
});

// Send changes
editor.on('change', (instance, change) => {
  if (!isTyping) {
    const content = instance.getValue();
    socket.send(JSON.stringify({ type: 'code', content }));
  }
});

socket.onmessage = async event => {
  let msg;

  // 🔍 Check if the message is a Blob
  if (event.data instanceof Blob) {
    const text = await event.data.text();      // Convert Blob to text
    msg = JSON.parse(text);                    // Now parse as JSON
  } else {
    msg = JSON.parse(event.data);              // Normal case
  }

  if (msg.type === 'code') {
    isTyping = true;
    const cursor = editor.getCursor();
    editor.setValue(msg.content);
    editor.setCursor(cursor);
    isTyping = false;
  }
};
