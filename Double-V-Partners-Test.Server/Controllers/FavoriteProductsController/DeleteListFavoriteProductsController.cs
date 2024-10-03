using Double_V_Partners_Test.Server.Data.Db;
using Microsoft.AspNetCore.Mvc;

namespace Double_V_Partners_Test.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class DeleteFavoriteProductController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    private readonly ILogger<DeleteFavoriteProductController> _logger;

    public DeleteFavoriteProductController(ILogger<DeleteFavoriteProductController> logger,
        ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpDelete("{id}", Name = "DeleteFavoriteProduct")]
    public async Task<IActionResult> DeleteFavoriteProduct(string id)
    {
        var favoriteProduct = await _context.FavoriteProducts.FindAsync(id);
        if (favoriteProduct == null) return NotFound();

        _context.FavoriteProducts.Remove(favoriteProduct);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}