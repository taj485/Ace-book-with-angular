using System;
using System.Collections.Generic;
using System.Text;

namespace MBA.Data.Entites
{
    public class Comment
    {
        public int CommentId { get; set; }
        public AppUser user { get; set; }
        public Post Post { get; set; }
        public string Text { get; set; }
        public DateTime CreatedAt { get; set; }

    }
}
