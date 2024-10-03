using Double_V_Partners_Test.Server.Data.Api;
using Double_V_Partners_Test.Server.models;
using Microsoft.AspNetCore.Mvc;

namespace Double_V_Partners_Test.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class GetListProductsController : ControllerBase
{
    private readonly ILogger<GetListProductsController> _logger;

    public GetListProductsController(ILogger<GetListProductsController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetListProducts")]
    public List<Product> GetListProducts()
    {
        try
        {
            return new ProductsApi().GetProductsApi().Result.Take(33).ToList();
        }
        catch (Exception ex)
        {
            return [];
        }
    }
}