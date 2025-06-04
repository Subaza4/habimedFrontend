export default {
    getUser(nombre, apellido1) {
        let nombreUser = localStorage.getItem(nombre).substring(0, 1)
        let apellidoUser = localStorage.getItem(apellido1);
        let userFinal = '';
        let login = nombreUser + apellidoUser;

        if (login.length > 6) {
            userFinal = login.substring(0, 6);
        } else {
            userFinal = '______';
            userFinal = login + userFinal.substring(0, 6 - login.length);
        }
        return userFinal.toLowerCase();
    },

    getId(usuario) {

        let random = Math.random() * 8999999;
        let idPeticion =(parseInt(random)) + usuario; // 7 aleatorio + 6 usuario

        return idPeticion;
    },

    getAfilUser (variable) {
        return localStorage.getItem(variable)
    },

    getURL() {
        let url = window.location.hash.substring(2,window.location.hash.length)
      return url;

    },


    clear() {
        localStorage.clear()
        sessionStorage.clear()
    }
}