using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class Artwork
{
    public int Id { get; set; }

    public string ArtName { get; set; } = null!;

    public string ArtDescription { get; set; } = null!;

    public byte[]? ArtImg { get; set; }

    public float ArtLength { get; set; }

    public float ArtBreadth { get; set; }

    public sbyte? Sold { get; set; }

    public int? ArtCategoryId { get; set; }

    public int? ArtistId { get; set; }

    public float? Price { get; set; }

    public virtual ArtworkCategory? ArtCategory { get; set; }

    public virtual Artist? Artist { get; set; }

    public virtual ArtworkCategoriesArtwork? ArtworkCategoriesArtwork { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
}
