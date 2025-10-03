using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Custom;
using Backend.Models;
using Backend.Models.DTOs;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DashboardContext _dbContext;
        public UsersController(DashboardContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> Lista()
        {
            var userIdClaim = User.FindFirst("id")?.Value;
            var roleClaim = User.FindFirst("role")?.Value;


            if (roleClaim == "admin")
            {
                var lista = await _dbContext.Users
                    .Select(u => new UsuarioResponseDTO
                    {
                        Id = u.Id,
                        Name = u.Name,
                        Email = u.Email,
                        Rol = u.Role,
                        Active = u.IsActive,
                        CreatedAt = u.CreatedAt
                    })
                    .ToListAsync();

                return Ok(new { data = lista });
            }
            else
            {
                var userId = Guid.Parse(userIdClaim);
                var user = await _dbContext.Users
                    .Where(u => u.Id == userId)
                    .Select(u => new UsuarioResponseDTO
                    {
                        Id = u.Id,
                        Name = u.Name,
                        Email = u.Email,
                        Rol = u.Role,
                        Active = u.IsActive,
                        CreatedAt = u.CreatedAt
                    })
                    .FirstOrDefaultAsync();

                if (user == null)
                    return NotFound("Usuario no encontrado.");

                return Ok(new { data = new List<UsuarioResponseDTO> { user } });
            }
        }
    }
}
