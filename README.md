# Dashboard Model

Please navigate to this project with your terminal window, then run

```
npm install
```

to install React and required dependencies.

Fake JSON data are fetched using Fake JSON [https://fakejson.com/](https://fakejson.com/), use your token to make requests.
Token to replace is inside the payload constant in /src/components/pages/Home.js

Run the app in the development mode using

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

If you download and run (see instructions) the **dashboard-model-server**
you can find on my repositories, please uncomment line 115 below

```
fetchData(`${baseUrlInternal}/feed/fake-data`, 'GET', '', false);
```

inside /src/components/pages/Home.js to fetch additional data from Express server running on port 3030.
