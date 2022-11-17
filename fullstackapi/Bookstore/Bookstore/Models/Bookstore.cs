using System.ComponentModel.DataAnnotations;

namespace Bookstore.Models
{
    public class Book
    {
        [Key]
        public Guid Bid { get; set; }
        public string Bname { get; set; }
        public string Author { get; set; }
        public int Price { get; set; }

    }
}
