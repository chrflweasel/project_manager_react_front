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

const error : Error = {
    message_en: 'Network error.',
    message_ru: 'Сетевая ошибка.',
    message_ua: 'Мережева помилка.',
    code: 0
}

const getResponse = async (formData: FormData) : Promise<Response> => {
    try {
        const res = await fetch(HOST, {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        })
        const r = await res.json() as Response
        return Promise.resolve(r)
    } catch (e) {
        console.error(e)
        return Promise.reject(error)
    }
}

export const getTasks = async (projectId : number) : Promise<Response> => {
    const formData = new FormData();
    formData.append("action", "GetTasks");
    formData.append("user_id", "1");
    formData.append("token", "2323d23d2323d2");
    formData.append("project_id", projectId.toString());

    try {
        const res = await getResponse(formData)
        return Promise.resolve(res)
    } catch (e) {
        return Promise.reject(e)
    }
}

export const createTask = async (projectId : number, taskName : string, taskState : number, parentId?: number) : Promise<Response> => {
    const formData = new FormData();
    formData.append("action", "CreateTask");
    formData.append("user_id", "1");
    formData.append("token", "2323d23d2323d2");
    formData.append("project_id", projectId.toString(10));
    formData.append("task_name", taskName);
    if (parentId) formData.append("parent_id", parentId.toString(10));
    formData.append("task_state", taskState.toString(10));

    try {
        const res = await getResponse(formData)
        return Promise.resolve(res)
    } catch (e) {
        return Promise.reject(e)
    }
}