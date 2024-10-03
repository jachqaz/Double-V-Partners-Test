using Double_V_Partners_Test.Server.Data.Api;
using Double_V_Partners_Test.Server.models;
using Microsoft.AspNetCore.Mvc;

namespace Double_V_Partners_Test.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class GetDetailProductController : ControllerBase
{
    private readonly ILogger<GetDetailProductController> _logger;

    public GetDetailProductController(ILogger<GetDetailProductController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetDetailProduct")]
    public Product GetDetailProduct(string id)
    {
        try
        {
            return new ProductsApi().GetProductsApi().Result.Find(product => product.Id == id)
                   ?? new Product();
        }
        catch (Exception ex)
        {
            return new Product();
        }
    }
}