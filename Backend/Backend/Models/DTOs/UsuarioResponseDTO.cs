namespace Backend.Models.DTOs
{
    public class UsuarioResponseDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Rol { get; set; }
        public bool Active { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
