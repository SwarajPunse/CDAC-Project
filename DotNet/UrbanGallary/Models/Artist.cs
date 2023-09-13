using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class Artist
{
    public int Id { get; set; }

    public string? Fname { get; set; }

    public string? Lname { get; set; }

    public string? Email { get; set; }

    public string? MobileNo { get; set; }

    public string? Studio { get; set; }

    public string? Address { get; set; }

    public sbyte? Approved { get; set; }

    public int? MId { get; set; }

    public int? LoginId { get; set; }

    public virtual ICollection<Artwork> Artworks { get; set; } = new List<Artwork>();

    public virtual Login? Login { get; set; }

    public virtual Membership? MIdNavigation { get; set; }

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
}
