using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;
using QuizTest.Models.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

namespace QuizTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }


        [HttpPost]
        public async Task<IActionResult> Register([FromBody] Account account)
        {
            var user = new IdentityUser { UserName = account.Email, Email = account.Email, };

            var result = await _userManager.CreateAsync(user, account.Password);



            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
           
            await _signInManager.SignInAsync(user, isPersistent: false);

            var token = CreateToken(user);
            return Ok(token);

        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Account account)
        {
            var result = await _signInManager.PasswordSignInAsync(account.Email, account.Password,false,false);
            
            if (!result.Succeeded)
            {
                return BadRequest();
            }

            var user = await _userManager.FindByEmailAsync(account.Email);
         
            await _signInManager.SignInAsync(user, isPersistent: false);

            var token = CreateToken(user);
            return Ok(token);

        }

        private string CreateToken(IdentityUser user)
        {
            var claims = new Claim[]
           {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id)
           };
            var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is a secret phrase"));
            var jwt = new JwtSecurityToken(signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256), claims: claims);
            return new JwtSecurityTokenHandler().WriteToken(jwt);

        }
    }
}