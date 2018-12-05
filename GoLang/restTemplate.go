package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "net/url"
    "os"
)

func main() {
    /*
     * Read your subscription key from an env variable.
     * Please note: You can replace this code block with
     * var subscriptionKey = "YOUR_SUBSCRIPTION_KEY" if you don't
     * want to use env variables.
     */
    subscriptionKey := os.Getenv("TRANSLATOR_TEXT_KEY")
    if subscriptionKey == "" {
        log.Fatal("Environment variable TRANSLATOR_TEXT_KEY is not set.")
    }
    /*
     * Call our function to make a request. It takes a single argument
     * the subscription key.
     */
    translate(subscriptionKey)
}

func translate(subscriptionKey string) {
    // Build the URL for our request (see: https://golang.org/pkg/net/url/#example_URL_Parse )
    u, _ := url.Parse("https://api.cognitive.microsofttranslator.com/translate?api-version=3.0")
    q := u.Query()
    q.Add("to", "de")
    q.Add("to", "it")
    u.RawQuery = q.Encode()

    /*
     * Create an anonymous struct for our request body and encode it to JSON.
     * This sample creates a JSON object per the Translator Text spec.
     */
    body := []struct {
        Text string
    }{
        {Text: "Hello, world!"},
    }
    b, _ := json.Marshal(body)

    // Build the HTTP POST request
    req, err := http.NewRequest("POST", u.String(), bytes.NewBuffer(b))
    if err != nil {
        log.Fatal(err)
    }
    // Add required headers
    req.Header.Add("Ocp-Apim-Subscription-Key", subscriptionKey)
    req.Header.Add("Content-Type", "application/json")

    // Call the Translator Text API
    res, err := http.DefaultClient.Do(req)
    if err != nil {
        log.Fatal(err)
    }

    // Decode the JSON response
    var result interface{}
    if err := json.NewDecoder(res.Body).Decode(&result); err != nil {
    	log.Fatal(err)
    }
    // Format and print the response to terminal
    prettyJSON, _ := json.MarshalIndent(result, "", "  ")
    fmt.Printf("%s\n", prettyJSON)
}
