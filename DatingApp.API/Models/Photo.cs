using System;
using DatingApp.API.Dtos;

namespace DatingApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }

        public string Description { get; set; }
        public DateTime DateAdded { get; set; }

        public bool isMain { get; set; }

        public string PublicId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }

        internal object Select(Func<object, PhotoForReturnDto> p)
        {
            throw new NotImplementedException();
        }
    }
}