/*
 * This sample requires JDK 7 or later, OkHttp, and Gson. Gradle files are
 * available in the Gradle-Files directory.
 */
import java.io.*;
import java.net.*;
import java.util.*;
import com.google.gson.*;
import com.squareup.okhttp.*;

public class Translate {
    // Add your subscription key.
    String subscriptionKey = "YOUR_SUBSCRIPTION_KEY";
    String url = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=de,it";

    // Instantiates the OkHttpClient.
    OkHttpClient client = new OkHttpClient();

    // This function performs a POST request.
    public String post() throws IOException {
        MediaType mediaType = MediaType.parse("application/json");
        /*
         * Creates the body of the request. This sample is structure for
         * Translator Text, which is an array of Text objects.
         */
        RequestBody body = RequestBody.create(mediaType,
                "[{\n\t\"Text\": \"Welcome to Microsoft Translator. Guess how many languages I speak!\"\n}]");
        Request request = new Request.Builder()
                .url(url).post(body)
                // Add additional headers here.
                .addHeader("Ocp-Apim-Subscription-Key", subscriptionKey)
                .addHeader("Content-type", "application/json").build();
        Response response = client.newCall(request).execute();
        return response.body().string();
    }

    /*
     * This function prettifies the json response. This is not required, but
     * makes the requests human readable for quickstarts. If you remove this
     * function, make sure to remove the preffity function in main.
     */
    public static String prettify(String json_text) {
        JsonParser parser = new JsonParser();
        JsonElement json = parser.parse(json_text);
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(json);
    }
    /*
     * The main function makes a post request and prettifies the response.
    */
    public static void main(String[] args) {
        try {
            Translate translateRequest = new Translate();
            String response = translateRequest.post();
            System.out.println(prettify(response));
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
