using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class OrderItem
{
    public int Id { get; set; }

    public int ArtworkId { get; set; }

    public int OrderId { get; set; }

    public virtual Artwork Artwork { get; set; } = null!;

    public virtual Order Order { get; set; } = null!;
}
