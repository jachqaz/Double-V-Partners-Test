using Double_V_Partners_Test.Server.models;
using Newtonsoft.Json;

namespace Double_V_Partners_Test.Server.Data.Api;

public class ProductsApi
{
    public async Task<List<Product>> GetProductsApi()
    {
        using var client = new HttpClient();
        var response = await client.GetAsync("https://api.escuelajs.co/api/v1/products");
        response.EnsureSuccessStatusCode();

        var jsonResponse = await response.Content.ReadAsStringAsync();

        var products = JsonConvert.DeserializeObject<List<Product>>(jsonResponse);

        return products ?? [];
    }
}