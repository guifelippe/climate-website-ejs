# Weather Forecast Website

![GitHub repo size](https://img.shields.io/github/repo-size/guifelippe/climate-website-ejs?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/guifelippe/climate-website-ejs?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/guifelippe/climate-website-ejs?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/guifelippe/climate-website-ejs?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/guifelippe/climate-website-ejs?style=for-the-badge)

<img src="./public/images/screen.png" aly="Print Screen WebSite"> 

## What is this project?

The Weather Forecast Website is a simple website that provides weather forecasts for anywhere in the world. With this website, you can check the current weather conditions for any city.

## How it works?

Is easy! Just enter the name of the city you want to check in the search field and click "Get Forecast". The site will use a reliable data source to fetch weather information, and in a matter of seconds, you will have access to detailed information, including the current temperature, weather conditions, and a representative image of the situation.

## Project Routes

The Weather Forecast Website comprises of multiple routes that help you access weather forecast information effectively. Here's an overview of how they work:

### Main Page

**Route:** `/`

**Description:**
- The main route is the first page that users access when opening the website.
- On this page, users can enter the name of the desired city in the search field.
- When you click on "Get Forecast," the site redirects to the weather search route.

### Climate research

**Route:** `/weather`

**Description:**
- When a user enters the name of a city and clicks "Get Forecast" on the main page, the site uses the weather search route.
- In this route, the website makes a request to the OpenWeatherMap API to obtain updated information about the weather conditions of the specified city.
- Data obtained from the API includes the current temperature, weather conditions, and a description of the weather.
- This data is then displayed on the weather forecast page.

### Error Page

**Route:** `/error`

**Description:**
- The error route is triggered if any problem occurs during the weather survey.
- This can happen, for example, if the entered city is not found.
- On this page, the user receives a friendly message informing them that there was a problem with the search.

### Static Files

**Route:** `/public`

**Description:**
- The project uses a folder of static files (CSS and images) to improve the design and user experience.
- These static files are served from the `/public` route.

## Tools Used

- **Node.js and Express.js**: To create the web server and manage the routes.
- **EJS (Embedded JavaScript Templates)**: A templating language that allows dynamic creation of HTML pages.
- **HTML and SCSS**: For the structure and style of the pages.
- **OpenWeatherMap API**: A third-party API that provides accurate and up-to-date weather information.
- **Axios**: A library for making HTTP requests.

## License

This project is distributed under the MIT License. Please feel free to use, modify, and distribute it as needed. 
See the [LICENSE](LICENSE.md) file for more details.
