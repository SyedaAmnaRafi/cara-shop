export function showToast(operation, id) {
    const toast = document.createElement('div');
    toast.classList.add('toast')

    if(operation === 'add'){
        toast.textContent =` Product with ID ${id} hs been added`
    } else {
        toast.textContent = `Product with ID ${id} hs been deleted`
    }

    document.body.appendChild(toast);

    setTimeout(() => {
     toast.remove()
    }, 2000)
}