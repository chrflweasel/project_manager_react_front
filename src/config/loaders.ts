import {HOST} from "./settings";

interface Error {
    code: number,
    message_ru: string,
    message_ua: string,
    message_en: string
}

interface Response {
    [index: string]: any,
    error?: Error
    success: boolean
}

const getResponse = async (formData: FormData) : Promise<Response|Error> => {
    try {
        const res = await fetch(HOST, {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        })
        return await res.json() as Response
    } catch (e) {
        console.error(e)
        const error : Error = {
            message_en: 'Network error.',
            message_ru: 'Сетевая ошибка.',
            message_ua: 'Мережева помилка.',
            code: 0
        }
        return error
    }
}

export const getTasks = async () : Promise<Response> => {
    const formData = new FormData();
    formData.append("action", "GetTasks");
    formData.append("user_id", "1");
    formData.append("token", "2323d23d2323d2");
    formData.append("project_id", "1");

    const res = await getResponse(formData)
    if (res instanceof Error) return Promise.reject(res)
    else return Promise.resolve(res as Response)
}