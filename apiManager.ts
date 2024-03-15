class APIManager {
    //GET REQUEST
    async get(url: string): Promise<any> {
        const response = await this.fetchAPI(url, { method: 'GET' });
        return response.json();
    }

    //POST REQUEST
    async post(url: string, data: any): Promise<any> {
        const response = await this.fetchAPI(url, { method: 'POST', body: JSON.stringify(data) });
        return response.json();
    }

    //PUT REQUEST
    async put(url: string, data: any): Promise<any> {
        const response = await this.fetchAPI(url, { method: 'PUT', body: JSON.stringify(data) });
        return response.json();
    }

    //DELETE REQUEST
    async delete(url: string): Promise<void> {
        await this.fetchAPI(url, { method: 'DELETE' });
    }

    private async fetchAPI(url: string, options: RequestInit): Promise<Response> {
        return fetch(url, options);
    }
}

const apiManager = new APIManager();

//CALL GET 
apiManager.get("https://jsonplaceholder.typicode.com/posts")
    .then(data => console.log(data))
    .catch(error => console.error(error));

//CALL POST 
apiManager.post("https://jsonplaceholder.typicode.com/posts",{
    "userId": 1000,
    "id": 2,
    "title": "This is a custom post",
    "body": "This is a description text."
  })
    .then(data => console.log(data))
    .catch(error => console.error(error));

//CALL PUT
apiManager.put("https://jsonplaceholder.typicode.com/posts",{
        "userId": 1000,
        "id": 2,
        "title": "Custom post was changed by me.",
        "body": "This is a description text and changed by me."
      })
        .then(data => console.log(data))
        .catch(error => console.error(error));

//CALL DELETE
apiManager.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log(data))
    .catch(error => console.error(error));