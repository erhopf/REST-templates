package main

import (
    // "fmt"
    // "encoding/json"
    "net/http"
//    "os"
    "log"
    "io/ioutil"
)

func main() {
//  var subscriptionKey string
//  subscriptionKey = os.Getenv("TRANSLATOR_TEXT_KEY")
//  validateKey()
  httpRequest()
}

func validateKey() {
  // Conditional statement to validate key goes here.
}

func httpRequest() {
	resp, err := http.Get("https://api.cognitive.microsofttranslator.com")
	if err != nil {
		log.Fatalln(err)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(string(body))
}
