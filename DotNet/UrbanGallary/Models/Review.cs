using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class Review
{
    public int Id { get; set; }

    public int ArtistId { get; set; }

    public int? CustomerId { get; set; }

    public int? CorporateId { get; set; }

    public int ArtworkId { get; set; }

    public string? Review1 { get; set; }

    public int? Rating { get; set; }

    public virtual Artist Artist { get; set; } = null!;

    public virtual Artwork Artwork { get; set; } = null!;

    public virtual CorporateCustomer? Corporate { get; set; }

    public virtual Customer? Customer { get; set; }
}
