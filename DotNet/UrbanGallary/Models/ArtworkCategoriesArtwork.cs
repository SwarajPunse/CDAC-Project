using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class ArtworkCategoriesArtwork
{
    public int ArtworkCategoryId { get; set; }

    public int ArtworksId { get; set; }

    public virtual ArtworkCategory ArtworkCategory { get; set; } = null!;

    public virtual Artwork Artworks { get; set; } = null!;
}
