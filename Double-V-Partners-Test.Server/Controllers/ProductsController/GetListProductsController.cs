using Double_V_Partners_Test.Server.Data.Api;
using Double_V_Partners_Test.Server.Data.Db;
using Double_V_Partners_Test.Server.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace Double_V_Partners_Test.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class GetListProductsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    private readonly ILogger<GetListProductsController> _logger;

    public GetListProductsController(ILogger<GetListProductsController> logger, ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet(Name = "GetListProducts")]
    public List<Product> GetListProducts()
    {
        try
        {
            var products = new ProductsApi().GetProductsApi().Result.Take(20).ToList();
            var favoriteProducts = _context.FavoriteProducts.ToListAsync().Result;
            if (favoriteProducts.IsNullOrEmpty()) return products;
            foreach (var product in products)
                product.Favorite = favoriteProducts.Exists(
                    favoriteProduct => favoriteProduct.Id == product.Id);

            return products;
        }
        catch (Exception ex)
        {
            return [];
        }
    }
}