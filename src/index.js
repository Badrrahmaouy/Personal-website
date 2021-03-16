import './style/style.scss'

import { pressLink } from './js/page'

export { pressLink }

window.addEventListener('load', (e) => {
    const btn = document.getElementById('project1')
    btn.addEventListener('click', pressLink)
})
