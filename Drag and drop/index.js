const dragItem = document.getElementById('dragItem')

// Evento de início do arraste
dragItem.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', '')
    dragItem.classList.add('dragItemToggle')
})

// Evento para ajustar o estilo ao terminar o arraste
dragItem.addEventListener('dragend', (e) => {
    // Calcula as novas posições
    const x = e.clientX - dragItem.offsetWidth / 2
    const y = e.clientY - dragItem.offsetHeight / 2

    // Atualiza a posição do item
    dragItem.style.left = `${x}px`
    dragItem.style.top = `${y}px`
    dragItem.classList.remove('dragItemToggle')
})

// Previne comportamentos padrão
document.body.addEventListener('dragover', (e) => e.preventDefault())
document.body.addEventListener('drop', (e) => e.preventDefault())