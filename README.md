# 📌 Lista de Tarefas (To-Do List)

Este projeto foi proposto por Luiz Otávio Miranda, como parte do Curso JavaScript e TypeScript do básico ao avançado.
O objetivo da aplicação é permitir ao usuário adicionar, remover e marcar tarefas como concluídas, praticando manipulação da DOM e boas práticas em JavaScript.

Link do curso: https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=KEEPLEARNINGBR

---

## Tecnologias e Recursos Utilizados — JavaScript

O JavaScript foi o foco principal do projeto, utilizando diversos recursos fundamentais:

### ✔ Manipulação da DOM
- **document.querySelector**
- **document.createElement**
- **element.classList.add**
- **element.append()**
- **element.remove()**

### ✔ Eventos
- **click** → adicionar e remover tarefas  
- **change** → detectar quando o checkbox é marcado  
- **keypress** → adicionar tarefas pressionando Enter  
- Delegação de eventos no elemento pai:
```js
list.addEventListener('click', ...)
```
### ✔ Validação
Evita a criação de tarefas vazias:
```js
if (input.value.trim() === '') return;
```
### ✔ Data Attributes
Alteração do estado visual da tarefa:
```js
span.dataset.status = 'completed';
```

### ✔ Estrutura lógica
- Criação dinâmica de elementos (**li, span, button, checkbox**)
- Identificação do alvo dos eventos com **event.target**
- Navegação no DOM com **.parentElement**
- Seleção específica com **.querySelector**

---
## Tecnologias e Recursos Utilizados — CSS

O CSS foi utilizado para estilizar e melhorar a interface:
- Layout com **Flexbox**
- Estilos condicionais usando data-attributes:
```css
.tasks[data-status="completed"] {
    text-decoration: line-through;
    color: rgb(243, 101, 101);
}
```
- Área com **scroll** para listas grandes
- Uso de **border-radius**, **box-shadow** e cores personalizadas
- Responsividade simples com tamanhos fluidos

---

## Resumo Técnico

 Este projeto reforça conceitos essenciais de:
- Manipulação avançada da DOM
- Criação e inserção dinâmica de elementos HTML
- Delegação de eventos para performance e organização
- Uso prático de data-attributes para Estados
- Interação entre HTML + CSS + JavaScript
- Organização de código seguindo boas práticas
