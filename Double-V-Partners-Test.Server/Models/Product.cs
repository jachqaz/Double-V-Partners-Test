namespace Double_V_Partners_Test.Server.models;

public class Product
{
    public string? Id { get; set; }
    public string? Title { get; set; }
    public string? Price { get; set; }
    public string? Description { get; set; }
    public string[]? Images { get; set; }
    public string? CreationAt { get; set; }
    public string? UpdatedAt { get; set; }
    public Category? Category { get; set; }
}