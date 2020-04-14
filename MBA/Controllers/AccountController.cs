using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MBA.Data;
using MBA.Data.Entites;
using MBA.Engine.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MBA.Controllers
{
    [Route("api/[Controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly MbaContext _mbaContext;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ILogger _logger;
        private readonly IMapper _mapper;

        public AccountController(MbaContext mbaContext, UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, ILogger<AccountController> logger, IMapper mapper)
        {
            _mbaContext = mbaContext;
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult> Register([FromBody] RegisterModel rm)
        {

            try
            {
                if (ModelState.IsValid)
                {
                    var user = new AppUser()
                    {
                        UserName = rm.UserName
                    };

                    var result = await _userManager.CreateAsync(user, rm.Password);

                    if (result.Succeeded)
                    {
                        await _signInManager.SignInAsync(user, isPersistent: false);
                        return Created($"/api/account/register{rm.UserName}", user);
                    }
                   
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to add NEW USER to database: {ex}");
            }

            return BadRequest("Failed to add NEW USER to database");
        }
    }
}
