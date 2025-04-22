namespace GenieDigital.Models.Home;

public class ContactRequest
{
    public required string Email { get; set; }

    public required string Name { get; set; }

    public required string Message { get; set; }

    public string? Object { get; set; }
}
