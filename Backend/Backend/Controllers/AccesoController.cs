using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Custom;
using Backend.Models;
using Backend.Models.DTOs;
using Microsoft.AspNetCore.Authorization;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DashboardContext _dbContext;
        private readonly Utilidades _utilidades;
        public AuthController(DashboardContext dbContext, Utilidades utilidades)
        {
            _dbContext = dbContext;
            _utilidades = utilidades;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(UsuarioDTO objeto)
        {

            var currentTime = DateTime.UtcNow;

            var userModel = new User
            {
                Id = Guid.NewGuid(),
                Name = objeto.Name,
                Email = objeto.Email,
                PasswordHash = _utilidades.encriptarSHA256(objeto.Password),
                IsActive = true,
                CreatedAt = currentTime,
                UpdatedAt = currentTime
            };

            await _dbContext.Users.AddAsync(userModel);

            await _dbContext.SaveChangesAsync();


            if (userModel.Id != Guid.Empty)
                return Ok(new { token = _utilidades.generarJWT(userModel) });
            else
                return BadRequest(new { message = "An error ocurred, please try again." });
        }


        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(LoginDTO objeto)
        {
            var usuarioEncontrado = await _dbContext.Users
                                    .Where(u =>
                                            u.Email == objeto.Email &&
                                            u.PasswordHash == _utilidades.encriptarSHA256(objeto.Password)
                                           ).FirstOrDefaultAsync();

            if (usuarioEncontrado == null)
                return NotFound(new { message = "User not found." });
            else
                return Ok(new {token = _utilidades.generarJWT(usuarioEncontrado)});
        }
    }
}
