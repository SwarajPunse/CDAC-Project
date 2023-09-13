using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class Login
{
    public int Id { get; set; }

    public string? Username { get; set; }

    public string? Password { get; set; }

    public sbyte? Status { get; set; }

    public int? RolesId { get; set; }

    public string? Question { get; set; }

    public string? Answer { get; set; }

    public virtual ICollection<Artist> Artists { get; set; } = new List<Artist>();

    public virtual ICollection<CorporateCustomer> CorporateCustomers { get; set; } = new List<CorporateCustomer>();

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();

    public virtual Role? Roles { get; set; }
}
