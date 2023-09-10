# Node.js Endpoint - README 

## Project Description

This Node.js project provides a simple HTTP endpoint that accepts two GET request query parameters and returns specific information in JSON format. The information includes the user's Slack name, the current day of the week, the current UTC time (within a +/-2 minute window), the user's specified track, the GitHub URL of the file being executed, the GitHub URL of the full source code, and a status code indicating success.

## Requirements

The project's requirements were as follows:

1. Slack Name: The response included the Slack name passed as a GET request query parameter.

2. Current Day of the Week: It displayed the current day of the week in full (e.g., Monday, Tuesday, etc.).

3. Current UTC Time: It returned the current UTC time, ensuring it was accurate within a +/-2 minute window.

4. Track: The response displayed the track the user signed up for, based on the track GET parameter passed to the endpoint (e.g., "Backend").

5. GitHub File URL: It included a direct link to the specific file in the GitHub repository that was being executed.

6. GitHub Repo URL: It included a link to the main page of the GitHub repository containing the project's entire source code.

7. Status Code: The response returned a status code of 200 as an integer.

8. JSON Format: The endpoint's response adhered to the specified JSON format.

## Endpoint Creation

To use this project, a publicly accessible HTTP endpoint was created. It could be deployed on various hosting platforms like Render, Heroku, Glitch, Netlify, or others.

## Usage

The endpoint was accessed by sending a GET request to the endpoint URL with the following query parameters:

slack_name: The user's Slack name.
track: The user's specified track (e.g., "backend").

### Example GET request:

```
http://example.com/api?slack_name=AngieO_name&track=backend
```

## Sample Response

The response from the endpoint was in JSON format and followed the structure below:

```
{
  "slack_name": "AngieO",
  "current_day": "Sunday",
  "utc_time": "2023-09-10T15:51:05Z",
  "track": "backend",
  "github_file_url": "https://github.com/Angiephoenix/repo/blob/main/file_name.ext",
  "github_repo_url": "https://github.com/Angiephoenix/repo",
  "status_code": 200
}
```

## Testing

To ensure the project's functionality:

It was verified that the endpoint was publicly accessible.
The returned JSON was checked against the defined format.
The correctness of each data point in the JSON response was validated.
Tools like cURL and Postman were used to test the endpoint with different query parameters.

