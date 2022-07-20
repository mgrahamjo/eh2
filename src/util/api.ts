const BASE_URL = 'https://gitlab--example-service-gcuutcukyq-uc.a.run.app';

export interface List {
    id: string;
    creationTimestamp: string;
    name: string;
}

const api = {
    get: {
        lists: (): Promise<Array<List>> => {
            return fetch(BASE_URL + '/lists')
                .then(res => res.json())
                .then(result => result.data as Array<List>);
        }
    },
    post: {

    }
};

export default api;
