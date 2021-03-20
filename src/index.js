import './style/style.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import { pressLink } from './js/page'

export { pressLink }

window.addEventListener('load', (e) => {
    const btn = document.getElementById('project1')
    btn.addEventListener('click', pressLink)
})
