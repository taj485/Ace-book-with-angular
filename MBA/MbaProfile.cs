using AutoMapper;
using MBA.Data.Entites;
using MBA.Engine.Models;
using MBA.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace MBA.Data
{
    public class MbaProfile : Profile
    {
        public MbaProfile()
        {
            CreateMap<Post, PostVm>()
                .ForMember(p => p.PostId, ex => ex.MapFrom(p => p.PostId))
                .ReverseMap();

            CreateMap<AppUser, RegisterModel>()
                .ReverseMap();
        }
    }
}
