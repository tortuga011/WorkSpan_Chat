function openChannel(evt, channel) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("chatlogs");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(channel).style.display = "flex";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

window.onload = function () {
  let El = document.querySelector(".messages");
  El.scrollTop = El.scrollHeight - El.clientHeight;
}

function addMsg() {
  let messages = document.querySelector(".messages");
  let newMsgBlock = `<div class="date">Monday, dec-20</div>
        <div class="chat self del">
          <div class="buttons">
            <button>
              <i class="material-icons">edit</i>
            </button>
            <button>
              <i class="material-icons">delete_outline</i>
            </button>
          </div>
          <div class="message-block">
            <p class="chat-message">Lorem, ipsum dolor consectetur, adipisicing elit..</p>
            <p class="time">12:12 pm</p>
          </div>
        </div>`
  messages.innerHTML = messages.innerHTML + newMsgBlock;
}

let textarea = document.querySelector("textarea");
  textarea.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      addMsg();
      textarea.value = '';
    }
  });

function deleteMsg() {
  let msgToDelete = document.querySelector("#deletable");
  msgToDelete.style.display = 'none';
}