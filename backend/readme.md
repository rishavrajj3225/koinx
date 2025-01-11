
Link to deployed api

- URL: `https://koinx-lzr.vercel.app/`
## Running Locally

First, clone the repository:

```bash
git clone <repository-url>
```

Then, navigate to the project directory and install the dependencies:

```bash
npm install
```

Finally, start the project:

```bash
npm start
```


Specific route 

### Fetch Data

This endpoint retrieves data from the server.

#### Response

The response for this request can be documented as a JSON schema:

``` json
{
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "value": {
            "type": "number"
          }
        }
      }
    }
  }
}

 ```

### Retrieve Ethereum Statistics

This endpoint retrieves the statistics for Ethereum.

#### Request

- Method: GET
    
- URL: `http://localhost:8000/api/stat/Ethereum`
    

#### Response

The response will be a JSON object with the following schema:

``` json
{
    "type": "object",
    "properties": {
        "price": {
            "type": "number"
        },
        "marketCap": {
            "type": "number"
        },
        "24hChange": {
            "type": "number"
        }
    }
}

 ```

The response will contain the following fields:

- `price` (number): The current price of Ethereum.
    
- `marketCap` (number): The market capitalization of Ethereum.
    
- `24hChange` (number): The 24-hour change in the value of Ethereum.


### API Request

This endpoint makes an HTTP GET request to retrieve the standard deviation for a specific item.

#### Request Body

This request does not require a request body.

#### Request Parameters

- Path Parameter
    
    - Matic: The specific item for which the standard deviation is being retrieved.
        

### API Response

The response for this request is a JSON object with the following schema:

``` json
{
    "standardDeviation": number
}

 ```

#### Response Description

- standardDeviation (number): The standard deviation value for the specified item.