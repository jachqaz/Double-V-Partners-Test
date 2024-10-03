using Double_V_Partners_Test.Server.models;
using Microsoft.EntityFrameworkCore;

namespace Double_V_Partners_Test.Server.Data.Db;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Product> FavoriteProducts { get; set; }
}