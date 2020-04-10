using AutoMapper;
using MBA.Data;
using MBA.Data.Entites;
using MBA.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBA.Controllers
{
    [Route("api/[Controller]/[action]")]
    [ApiController]
    public class PostsController : ControllerBase 
    {
        private readonly MbaContext _mbaContext;
        private readonly ILogger _logger;
        private readonly IMapper _mapper;

        public PostsController(MbaContext mbaContext, ILogger<PostsController> logger, IMapper mapper)
        {
            _mbaContext = mbaContext;
            _logger = logger;
            _mapper = mapper;
        }

       
        [HttpGet]
        public ActionResult<IEnumerable<PostVm>> GetAllPost()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Post>, IEnumerable<PostVm>>( _mbaContext.Posts.OrderByDescending(x => x.PostId)));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get posts Error: {ex}");
                return BadRequest("Failed to get posts");
            }
        }

        [HttpPost]
        public ActionResult AddPost([FromBody]PostVm postVm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var post = _mapper.Map<PostVm, Post>(postVm);
                    _mbaContext.Posts.Add(post);
                    if (_mbaContext.SaveChanges() > 0)
                    {
                        return Created($"/api/posts/addPost{postVm.PostId}", post);
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to add new post to database: {ex}");
            }

            return BadRequest("Failed to add new post to database");
        }

    }
}
