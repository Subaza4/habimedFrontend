export default {

    getLocalStorage(variable) {
        return JSON.parse(localStorage.getItem(variable))
    },

    setLocalStorage(variable, data) {
        localStorage.setItem(variable, JSON.stringify(data))
    },

    getToken(variable) {
        return localStorage.getItem(variable)
    },

    setToken(variable, data) {
        localStorage.setItem(variable, data)
    },

    clear() {
        localStorage.clear()
        sessionStorage.clear()
    }
}