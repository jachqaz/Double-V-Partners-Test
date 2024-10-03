using Double_V_Partners_Test.Server.models;
using Newtonsoft.Json;

namespace Double_V_Partners_Test.Server.Data.Api;

public class CategoriesApi
{
    public async Task<List<Category>> GetCategoriesApi()
    {
        using var client = new HttpClient();
        var response = await client.GetAsync("https://api.escuelajs.co/api/v1/categories");
        response.EnsureSuccessStatusCode();

        var jsonResponse = await response.Content.ReadAsStringAsync();

        var categories = JsonConvert.DeserializeObject<List<Category>>(jsonResponse);

        return categories ?? [];
    }
}