using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class Transaction
{
    public int Id { get; set; }

    public int? CustomerId { get; set; }

    public int? CorporateId { get; set; }

    public int OrderId { get; set; }

    public float Price { get; set; }

    public DateTime DateTime { get; set; }

    public virtual CorporateCustomer? Corporate { get; set; }

    public virtual Customer? Customer { get; set; }

    public virtual Order Order { get; set; } = null!;
}
