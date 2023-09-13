using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class ArtworkCategory
{
    public int Id { get; set; }

    public string? Cname { get; set; }

    public virtual ICollection<ArtworkCategoriesArtwork> ArtworkCategoriesArtworks { get; set; } = new List<ArtworkCategoriesArtwork>();

    public virtual ICollection<Artwork> Artworks { get; set; } = new List<Artwork>();
}
