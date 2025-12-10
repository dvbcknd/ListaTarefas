
const input = document.querySelector('#input');
const list = document.querySelector('#list');
const btnAdd = document.querySelector('#add');

// Adicionar tarefa
btnAdd.addEventListener('click', () => {

    //Garante que não adicione tarefas vázias
    if (input.value.trim() === '') return;

    const li = document.createElement('li');
    li.classList.add('item-list');

    //Criação do botão checkbox
    const done = document.createElement('input');
    done.classList.add('done');
    done.setAttribute('type', 'checkbox');

    //Criação da tafera
    const span = document.createElement('span');
    span.classList.add('tasks');
    span.textContent = input.value;

    //Criação do botão excluir
    const btn = document.createElement('button');
    btn.classList.add('remove');
    btn.textContent = 'Excluir';

    //adiciona os itens dentro do li
    li.append(done, span, btn);

    //Adiciona a li dentro da list
    list.append(li);

    input.value = ''; // Limpa a caixa de input
    input.focus(); // Faz o cursor voltar para a caixa de input
});

// Delegação de eventos para remover 
list.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        event.target.parentElement.remove();
    }
});

//Delegação de enventos para riscar as tarefas
list.addEventListener('change', (event) => {
    if (event.target.classList.contains('done')) {
        //Localiza o span dentro da li
        const span = event.target.parentElement.querySelector('.tasks');

        //Seta o atributo de status nas tarefas, que faz usar o css condicional para formatar.
        if (event.target.checked) {
            span.dataset.status = 'completed';
        } else {
            span.dataset.status = '';
        }
    }
});

// Pressionar Enter no teclado adiciona
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') btnAdd.click();
});
