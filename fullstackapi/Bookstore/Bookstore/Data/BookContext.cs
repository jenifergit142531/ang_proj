using Microsoft.EntityFrameworkCore;
using Bookstore.Models;

namespace Bookstore.Data
{
    public class BookContext : DbContext
    {
        public BookContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Book> Books { get; set; }

    }
}
