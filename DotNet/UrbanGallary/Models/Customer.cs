using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class Customer
{
    public int Id { get; set; }

    public string? Fname { get; set; }

    public string? Lname { get; set; }

    public string? Email { get; set; }

    public string? MobileNo { get; set; }

    public string? Address { get; set; }

    public sbyte? Approved { get; set; }

    public int? MId { get; set; }

    public int? LoginId { get; set; }

    public virtual Login? Login { get; set; }

    public virtual Membership? MIdNavigation { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
}
