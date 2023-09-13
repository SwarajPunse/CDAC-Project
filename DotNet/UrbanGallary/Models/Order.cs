using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class Order
{
    public int Id { get; set; }

    public int? CustId { get; set; }

    public int? CorporateId { get; set; }

    public DateTime? Date { get; set; }

    public virtual CorporateCustomer? Corporate { get; set; }

    public virtual Customer? Cust { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual Transaction? Transaction { get; set; }
}
