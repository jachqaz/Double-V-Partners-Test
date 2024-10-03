using Double_V_Partners_Test.Server.Data.Db;
using Double_V_Partners_Test.Server.models;
using Microsoft.AspNetCore.Mvc;

namespace Double_V_Partners_Test.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class PostFavoriteProductController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    private readonly ILogger<PostFavoriteProductController> _logger;

    public PostFavoriteProductController(ILogger<PostFavoriteProductController> logger,
        ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpDelete(Name = "PostFavoriteProduct")]
    public async Task<ActionResult<Product>> PostFavoriteProduct(Product favoriteProduct)
    {
        _context.FavoriteProducts.Add(favoriteProduct);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetFavoriteProduct", new { id = favoriteProduct.Id }, favoriteProduct);
    }
}