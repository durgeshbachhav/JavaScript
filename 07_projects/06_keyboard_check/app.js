// Select the HTML element with id "insert"
const insert = document.querySelector('#insert');

// Add an event listener for keydown events on the window
window.addEventListener('keydown', (e) => {
     // Update the innerHTML of the "insert" element with information about the pressed key
     insert.innerHTML = `
     <div class='color'>
     <table>
          <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
          </tr>
          <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
          </tr>
     </table>
     </div>
     `;
});
