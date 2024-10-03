using Double_V_Partners_Test.Server.Data.Api;
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
    public List<Category> GetListCategories()
    {
        try
        {
            return new CategoriesApi().GetCategoriesApi().Result;
        }
        catch (Exception ex)
        {
            return [];
        }
    }
}