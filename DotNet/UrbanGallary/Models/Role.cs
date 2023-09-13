using System;
using System.Collections.Generic;

namespace UrbanGallary.Models;

public partial class Role
{
    public int Id { get; set; }

    public string Role1 { get; set; } = null!;

    public virtual ICollection<Login> Logins { get; set; } = new List<Login>();
}
