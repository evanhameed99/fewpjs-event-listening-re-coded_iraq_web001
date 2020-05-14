function addingEventListener() {
  alert(' i was clicked' );
}
const input = document.getElementById('input');
input.addEventListener('click', addingEventListener());
