using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MBA.Data;
using MBA.Data.Entites;
using MBA.Engine.Models;
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
        private readonly ILogger _logger;
        private readonly IMapper _mapper;

        public AccountController(MbaContext mbaContext, ILogger<AccountController> logger, IMapper mapper)
        {
            _mbaContext = mbaContext;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpPost]
        public ActionResult Register([FromBody] RegisterModel rm)
        {

            try
            {
                if (ModelState.IsValid)
                {
                    var newUser = _mapper.Map<RegisterModel, AppUser>(rm);
                    _mbaContext.Users.Add(newUser);
                    if (_mbaContext.SaveChanges() > 0)
                    {
                        return Created($"/api/account/register{rm.UserName}", newUser);
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
