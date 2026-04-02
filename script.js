const board = document.getElementById('board');
        let listCounter = 1;

        // Função para criar uma nova caixa de lista
        function createNewList() {
            const listId = `list-${listCounter++}`;
            
            const listDiv = document.createElement('div');
            listDiv.className = 'list-container';
            listDiv.innerHTML = `
                <div class="list-header">
                    <h3 contenteditable="true">Lista ${listCounter - 1}</h3>
                    <button class="btn-delete" onclick="this.parentElement.parentElement.remove()">✕</button>
                </div>
                <div class="task-input-area">
                    <input type="text" placeholder="Nova tarefa..." id="input-${listId}">
                    <button class="btn-task" onclick="addTask('${listId}')">Add</button>
                </div>
                <ul id="ul-${listId}"></ul>
            `;
            
            board.appendChild(listDiv);

            // Adicionar evento de "Enter" no input
            const input = document.getElementById(`input-${listId}`);
            input.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    addTask(listId);
                }
            });
        }

        // Função para adicionar tarefa dentro de uma lista específica
        function addTask(listId) {
            const input = document.getElementById(`input-${listId}`);
            const ul = document.getElementById(`ul-${listId}`);
            const taskText = input.value.trim();

            if (taskText !== "") {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${taskText}</span>
                    <button class="btn-delete" onclick="this.parentElement.remove()">–</button>
                `;
                ul.appendChild(li);
                input.value = ""; // Limpa o campo
                input.focus();
            }
        }

        // Criar a primeira lista automaticamente ao carregar
        window.onload = createNewList;