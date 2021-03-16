const desc = document.getElementById('project')

export function pressLink() {
    if(desc.style['display'] === 'block') {
        desc.style['display'] = 'none'
    } else {
        desc.style['display'] = 'block'
    }

}