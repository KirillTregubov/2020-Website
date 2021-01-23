export default function (to, from, savedPosition) {
    try {
    const elem = document.querySelector(to.hash)
    if (elem) {
        try {
            const offset = parseFloat(getComputedStyle(elem).scrollMarginTop)
        } catch {
            const offset = 0;
        }
        
        return {
            selector: to.hash,
            offset: { y: offset }
        }
    }
    } catch {}
    return savedPosition
}