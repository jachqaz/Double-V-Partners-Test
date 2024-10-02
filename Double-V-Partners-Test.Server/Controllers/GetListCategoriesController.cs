using System.Collections;
using Double_V_Partners_Test.Server.models;
using Microsoft.AspNetCore.Mvc;

namespace Double_V_Partners_Test.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class GetListCategoriesController : ControllerBase
{
    private readonly ILogger<GetListCategoriesController> _logger;

    public GetListCategoriesController(ILogger<GetListCategoriesController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetListCategories")]
    public ArrayList GetListCategories()
    {
        ArrayList categories = [];
        var category = new Category();
        category.Id = "1";
        category.Name = "Clothes";
        category.Image = "https://i0.pickpik.com/photos/573/909/315/store-clothes-clothing-line-preview.jpg";
        category.CreationAt = "2024-10-01T17:05:39.000Z";
        category.UpdatedAt = "2024-10-01T20:59:43.000Z";
        categories.Add(category);
        category = new Category();
        category.Id = "2";
        category.Name = "Furniture";
        category.Image = "https://i.imgur.com/Qphac99.jpeg";
        category.CreationAt = "2024-10-01T17:05:39.000Z";
        category.UpdatedAt = "2024-10-02T03:20:00.000Z";
        categories.Add(category);
        return categories;
    }
}