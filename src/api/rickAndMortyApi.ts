import axios from "axios";
import { toast } from "react-toastify";
import qs from "query-string";

const messageError = 'Não foi possivel fazer a requisição';

export async function getCharacter(parameter: number) {
    try {
        return await axios.get(`https://rickandmortyapi.com/api/character/${parameter}`);
    } catch (error) {
        toast.error(messageError);
    }
}

export async function getCharacters(params: {name?: string ,status?:string, species?: string, type?: string, gender?: string}) {
    const queryParams = qs.stringify(params, {skipNull:true});
    try {
        return await axios.get(`https://rickandmortyapi.com/api/character/?${queryParams}`);
    } catch (error) {
        toast.error(messageError);
    }
}