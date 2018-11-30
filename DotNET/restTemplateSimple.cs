// This sample requires .NET 7.1 or later, and Newtonsoft.Json.

using System;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json;

namespace SampleFunction
{
    class Program
    {
        static void SampleFunction()
        {
            string host = "https://api.cognitive.microsofttranslator.com";
            string route = "/translate?api-version=3.0&to=de&to=it";
            // Add your subcription key.
            string subscriptionKey = "YOUR_SUBSCRIPTION_KEY";
            /*
             * Creates the body of the request. This sample is structure for
             * Translator Text, which is an array of Text objects.
             */
            System.Object[] body = new System.Object[] { new { Text = @"Hello world." } };
            var requestBody = JsonConvert.SerializeObject(body);

            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                // Set the method to POST
                request.Method = HttpMethod.Post;
                // Construct the full URI
                request.RequestUri = new Uri(host + route);
                // Add the serialized JSON object to your request
                request.Content = new StringContent(requestBody, Encoding.UTF8, "application/json");
                // Add the authorization header
                request.Headers.Add("Ocp-Apim-Subscription-Key", subscriptionKey);
                // Send request, get response
                var response = client.SendAsync(request).Result;
                var jsonResponse = response.Content.ReadAsStringAsync().Result;
                // Print the response
                Console.WriteLine(jsonResponse);
                Console.WriteLine("Press any key to continue.");
            }
        }
        /*
         * The main function makes a post request and prettifies the response.
        */
        static void Main(string[] args)
        {
            SampleFunction();
            Console.ReadLine();

        }
    }
}
