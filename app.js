function update() {

    fetch("./object.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            var chat = data;
            console.log(data);
            setTimeout(update, 1000);
            // console.log(Object.keys(data.items).length);
            for (let i = 0; i < Object.keys(data.items).length; i++) {
                // chatBox.innerHTML += data.items[i].authorDetails.displayName;
                // chatBox.innerHTML += ': ';
                // chatBox.innerHTML += data.items[i].snippet.displayMessage;
                // chatBox.innerHTML += '<br>';

                const chatBox = document.getElementById("chat");
                const chatName = document.createElement("div");
                const chatMessage = document.createElement("div");
                const row = document.createElement("div");

                const chatNameText = document.createTextNode(data.items[i].authorDetails.displayName);
                const chatMessageText = document.createTextNode(data.items[i].snippet.displayMessage);

                const collum4 = ['col', 's4'];
                const collum8 = ['col', 's8'];

                chatName.appendChild(chatNameText);
                chatName.classList.add(...collum4);
                chatMessage.appendChild(chatMessageText);
                chatMessage.classList.add(...collum8);
                row.appendChild(chatName);
                row.appendChild(chatMessage);
                row.classList.add("row");
                chatBox.appendChild(row);

            }
        })

}

update();