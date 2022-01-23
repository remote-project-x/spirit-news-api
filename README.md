# Spirit News APIs Backend

## _spirit-news-api_

| METHOD | API ENDPOINT                      | Description              |
| ------ | --------------------------------- | ------------------------ |
| GET    | {{base_url}}/api/v1               | Application status check |
| GET    | {{base_url}}/health-check         | Application health check |
| POST   | {{base_url}}/api/v1/news/add-news | Create a news            |
| GET    | {{base_url}}/api/v1/news/all-news | Get All news             |
| GET    | {{base_url}}/api/v1/news/:id      | Get a news by Id       |
| PATCH  | {{base_url}}/api/v1/news/:id      | Update a news          |
| DELETE | {{base_url}}/api/v1/news/:id      | Delete a news by Id    |

> base_url (localhost) : http://0.0.0.0:3001

> base_url (herokuapp) : https://spirit-news-api.herokuapp.com

## Getting Started

The quickest way to get started is to use `spirit-news-api`.

```sh
cd spirit-news-api
rename .env-example -> .env
npm install
npm run dev
```

> Note: `npm run dev` will kepp running your application by nodemon.

Verify the deployment (localhost) by navigating to your server address in
your preferred browser.

```sh
http://0.0.0.0:3001/api/v1
```


### API Documentation Link

- [Spirit News APIs Backend APIs Documentation](https://documenter.getpostman.com/view/11968235/UVXqECiT)

### References

- [News APIs](https://newsapi.org/)

> **Bayes Ahmed Shoharto**
