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
        private readonly Utilidades _utilidades;
        public UsersController(DashboardContext dbContext, Utilidades utilidades)
        {
            _dbContext = dbContext;
            _utilidades = utilidades;
        }

        [HttpGet]
        [Route("")]
        [Authorize]
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
                        CreatedAt = u.CreatedAt,
                        UpdatedAt = u.UpdatedAt
                    })
                    .FirstOrDefaultAsync();

                if (user == null)
                    return NotFound("Usuario no encontrado.");

                return Ok(new { data = new List<UsuarioResponseDTO> { user } });
            }
        }

        [HttpPost]
        [Route("")]
        [Authorize]
        public async Task<IActionResult> CreateUser(UsuarioDTO objeto)
        {
            try
            {
                var emailExists = await _dbContext.Users
                    .AnyAsync(u => u.Email == objeto.Email);

                if (emailExists)
                    return BadRequest(new { message = "Email already exists" });

                var userModel = new User
                {
                    Id = Guid.NewGuid(),
                    Name = objeto.Name,
                    Email = objeto.Email,
                    PasswordHash = _utilidades.encriptarSHA256(objeto.Password),
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                await _dbContext.Users.AddAsync(userModel);
                await _dbContext.SaveChangesAsync();

                var userResponse = new
                {
                    Id = userModel.Id,
                    Name = userModel.Name,
                    Email = userModel.Email,
                    IsActive = userModel.IsActive,
                    CreatedAt = userModel.CreatedAt,
                    UpdatedAt = userModel.UpdatedAt
                };

                return Ok(new
                {
                    message = "User created successfully",
                    user = userResponse
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"An error occurred: {ex.Message}" });
            }
        }

        [HttpPut]
        [Route("{id}")]
        [Authorize]
        public async Task<IActionResult> Update(Guid id, UsuarioUpdateDTO objeto)
        {
            try
            {
                var usuarioExistente = await _dbContext.Users.FindAsync(id);

                if (usuarioExistente == null)
                    return NotFound(new { message = "User not found" });

                if (string.IsNullOrEmpty(objeto.Name))
                    return BadRequest(new { message = "Name is required" });

                if (string.IsNullOrEmpty(objeto.Email))
                    return BadRequest(new { message = "Email is required" });

                var emailExists = await _dbContext.Users
                    .AnyAsync(u => u.Email == objeto.Email && u.Id != id);

                if (emailExists)
                    return BadRequest(new { message = "Email already in use by another user" });

                usuarioExistente.Name = objeto.Name;
                usuarioExistente.Email = objeto.Email;
                usuarioExistente.UpdatedAt = DateTime.UtcNow;

                await _dbContext.SaveChangesAsync();

                return Ok(new
                {
                    message = "User updated successfully",
                    user = usuarioExistente
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"An error occurred: {ex.Message}" });
            }
        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            try
            {
                var userIdClaim = User.Claims.FirstOrDefault(c => c.Type == "Id")?.Value;
                var roleClaim = User.Claims.FirstOrDefault(c => c.Type == "role")?.Value;

                if (roleClaim != "admin")
                    return StatusCode(StatusCodes.Status403Forbidden, new { message = "Only admins can delete users" });

                if (Guid.Parse(userIdClaim) == id)
                    return BadRequest(new { message = "Admins cannot delete their own account" });

                var usuarioExistente = await _dbContext.Users.FindAsync(id);

                if (usuarioExistente == null)
                    return NotFound(new { message = "User not found" });

                _dbContext.Users.Remove(usuarioExistente);
                await _dbContext.SaveChangesAsync();

                return Ok(new { message = "User deleted successfully", userId = id });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"An error occurred: {ex.Message}" });
            }
        }


    }
}
