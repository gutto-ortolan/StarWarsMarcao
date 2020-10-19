import axios from 'axios'

export default class Requisicoes{

    constructor(){
        this.urlBase = `https://swapi.dev/api/`;
    }

    async getDados(url){
        const result = await axios.get(this.urlBase + url)
        return result.data.results
    }

    async getUnicoDado(urlInteira){
        const result = await axios.get(urlInteira)
        return result.data.results
    }

}
