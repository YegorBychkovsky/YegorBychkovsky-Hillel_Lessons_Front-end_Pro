document.addEventListener('click', (event) => {
    if (event.target.tagName === 'LABEL') {
        const block = event.target.closest('.block')
        const input = block.querySelector('input')
        input.value++
    } else {
        return
    }
}) 