using Double_V_Partners_Test.Server.Data.Db;
using Double_V_Partners_Test.Server.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Double_V_Partners_Test.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class GetListFavoriteProductsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    private readonly ILogger<GetListFavoriteProductsController> _logger;

    public GetListFavoriteProductsController(ILogger<GetListFavoriteProductsController> logger,
        ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet(Name = "GetListFavoriteProducts")]
    public List<Product> GetFavoriteProducts()
    {
        try
        {
            var favoriteProducts = _context.FavoriteProducts.ToListAsync().Result;

            return favoriteProducts ?? [];
        }
        catch (Exception ex)
        {
            return [];
        }
    }
}