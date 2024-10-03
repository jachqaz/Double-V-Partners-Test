using Double_V_Partners_Test.Server.models;
using Microsoft.EntityFrameworkCore;

namespace Double_V_Partners_Test.Server.Data.Db;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<Product> FavoriteProducts { get; set; }
    public DbSet<Category> Categories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().ToTable("Product");
        modelBuilder.Entity<Category>().ToTable("Category");
    }
}