using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class Membership
{
    public int Id { get; set; }

    public string Mname { get; set; } = null!;

    public int Duration { get; set; }

    public float Price { get; set; }

    public virtual ICollection<Artist> Artists { get; set; } = new List<Artist>();

    public virtual ICollection<CorporateCustomer> CorporateCustomers { get; set; } = new List<CorporateCustomer>();

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();
}
