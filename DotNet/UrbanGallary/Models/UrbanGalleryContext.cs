using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace UrbanGallary.Models;

public partial class UrbanGalleryContext : DbContext
{
    public UrbanGalleryContext()
    {
    }

    public UrbanGalleryContext(DbContextOptions<UrbanGalleryContext> options)
        : base(options)
    {
    }

  

    public virtual DbSet<Artist> Artists { get; set; }

    public virtual DbSet<Artwork> Artworks { get; set; }

    public virtual DbSet<ArtworkCategoriesArtwork> ArtworkCategoriesArtworks { get; set; }

    public virtual DbSet<ArtworkCategory> ArtworkCategories { get; set; }

    public virtual DbSet<CorporateCustomer> CorporateCustomers { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Membership> Memberships { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderItem> OrderItems { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Transaction> Transactions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=urban_gallery", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        

        modelBuilder.Entity<Artist>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("artists");

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.HasIndex(e => e.LoginId, "login_id_idx");

            entity.HasIndex(e => e.MId, "m_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(200)
                .HasColumnName("address");
            entity.Property(e => e.Approved).HasColumnName("approved");
            entity.Property(e => e.Email)
                .HasMaxLength(200)
                .HasColumnName("email");
            entity.Property(e => e.Fname)
                .HasMaxLength(90)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(90)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.MId).HasColumnName("m_id");
            entity.Property(e => e.MobileNo)
                .HasMaxLength(12)
                .HasColumnName("mobile_no");
            entity.Property(e => e.Studio)
                .HasMaxLength(100)
                .HasColumnName("studio");

            entity.HasOne(d => d.Login).WithMany(p => p.Artists)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("login_id");

            entity.HasOne(d => d.MIdNavigation).WithMany(p => p.Artists)
                .HasForeignKey(d => d.MId)
                .HasConstraintName("m_id");
        });

        modelBuilder.Entity<Artwork>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("artworks");

            entity.HasIndex(e => e.ArtCategoryId, "art_category_idx");

            entity.HasIndex(e => e.ArtistId, "artist_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ArtBreadth).HasColumnName("art_breadth");
            entity.Property(e => e.ArtCategoryId).HasColumnName("art_category_id");
            entity.Property(e => e.ArtDescription)
                .HasMaxLength(500)
                .HasColumnName("art_description");
            entity.Property(e => e.ArtImg).HasColumnName("art_img");
            entity.Property(e => e.ArtLength).HasColumnName("art_length");
            entity.Property(e => e.ArtName)
                .HasMaxLength(100)
                .HasColumnName("art_name");
            entity.Property(e => e.ArtistId).HasColumnName("artist_id");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.Sold)
                .HasDefaultValueSql("'0'")
                .HasColumnName("sold");

            entity.HasOne(d => d.ArtCategory).WithMany(p => p.Artworks)
                .HasForeignKey(d => d.ArtCategoryId)
                .HasConstraintName("art_category");

            entity.HasOne(d => d.Artist).WithMany(p => p.Artworks)
                .HasForeignKey(d => d.ArtistId)
                .HasConstraintName("artist");
        });

        modelBuilder.Entity<ArtworkCategoriesArtwork>(entity =>
        {
            entity.HasKey(e => new { e.ArtworkCategoryId, e.ArtworksId })
                .HasName("PRIMARY")
                .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

            entity.ToTable("artwork_categories_artworks");

            entity.HasIndex(e => e.ArtworksId, "UK_7rltojy69kxjiq9lsl1ta7dc2").IsUnique();

            entity.Property(e => e.ArtworkCategoryId).HasColumnName("artwork_category_id");
            entity.Property(e => e.ArtworksId).HasColumnName("artworks_id");

            entity.HasOne(d => d.ArtworkCategory).WithMany(p => p.ArtworkCategoriesArtworks)
                .HasForeignKey(d => d.ArtworkCategoryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKmbb9i9ygb71d1jbijfb01e6y4");

            entity.HasOne(d => d.Artworks).WithOne(p => p.ArtworkCategoriesArtwork)
                .HasForeignKey<ArtworkCategoriesArtwork>(d => d.ArtworksId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKmxm3asn7tilrsgkma6l13ymyn");
        });

        modelBuilder.Entity<ArtworkCategory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("artwork_categories");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Cname)
                .HasMaxLength(100)
                .HasColumnName("cname");
        });

        modelBuilder.Entity<CorporateCustomer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("corporate_customers");

            entity.HasIndex(e => e.LoginId, "login2_id_idx");

            entity.HasIndex(e => e.MId, "m2_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(200)
                .HasColumnName("address");
            entity.Property(e => e.Approved)
                .HasColumnType("bit(1)")
                .HasColumnName("approved");
            entity.Property(e => e.Email)
                .HasMaxLength(200)
                .HasColumnName("email");
            entity.Property(e => e.Firmname)
                .HasMaxLength(200)
                .HasColumnName("firmname");
            entity.Property(e => e.GstNo)
                .HasMaxLength(12)
                .HasColumnName("gst_no");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.MId).HasColumnName("m_id");
            entity.Property(e => e.MobileNo)
                .HasMaxLength(12)
                .HasColumnName("mobile_no");

            entity.HasOne(d => d.Login).WithMany(p => p.CorporateCustomers)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("Fk_login_3");

            entity.HasOne(d => d.MIdNavigation).WithMany(p => p.CorporateCustomers)
                .HasForeignKey(d => d.MId)
                .HasConstraintName("Fk_membership_3");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("customers");

            entity.HasIndex(e => e.LoginId, "login_id_idx");

            entity.HasIndex(e => e.MId, "m_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(200)
                .HasColumnName("address");
            entity.Property(e => e.Approved).HasColumnName("approved");
            entity.Property(e => e.Email)
                .HasMaxLength(200)
                .HasColumnName("email");
            entity.Property(e => e.Fname)
                .HasMaxLength(90)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(90)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.MId).HasColumnName("m_id");
            entity.Property(e => e.MobileNo)
                .HasMaxLength(12)
                .HasColumnName("mobile_no");

            entity.HasOne(d => d.Login).WithMany(p => p.Customers)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("login1_id");

            entity.HasOne(d => d.MIdNavigation).WithMany(p => p.Customers)
                .HasForeignKey(d => d.MId)
                .HasConstraintName("m1_id");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("login");

            entity.HasIndex(e => e.Id, "id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.RolesId, "roles_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Answer)
                .HasMaxLength(200)
                .HasColumnName("answer");
            entity.Property(e => e.Password)
                .HasMaxLength(90)
                .HasColumnName("password");
            entity.Property(e => e.Question)
                .HasMaxLength(200)
                .HasColumnName("question");
            entity.Property(e => e.RolesId).HasColumnName("roles_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Username)
                .HasMaxLength(90)
                .HasColumnName("username");

            entity.HasOne(d => d.Roles).WithMany(p => p.Logins)
                .HasForeignKey(d => d.RolesId)
                .HasConstraintName("roles_id");
        });

        modelBuilder.Entity<Membership>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("memberships");

            entity.HasIndex(e => e.Id, "id_UNIQUE").IsUnique();

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Duration).HasColumnName("duration");
            entity.Property(e => e.Mname)
                .HasMaxLength(90)
                .HasColumnName("mname");
            entity.Property(e => e.Price).HasColumnName("price");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("orders");

            entity.HasIndex(e => e.CorporateId, "corporate_id_idx");

            entity.HasIndex(e => e.CustId, "cust_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CorporateId).HasColumnName("corporate_id");
            entity.Property(e => e.CustId).HasColumnName("cust_id");
            entity.Property(e => e.Date)
                .HasColumnType("datetime")
                .HasColumnName("date");

            entity.HasOne(d => d.Corporate).WithMany(p => p.Orders)
                .HasForeignKey(d => d.CorporateId)
                .HasConstraintName("corporate_id");

            entity.HasOne(d => d.Cust).WithMany(p => p.Orders)
                .HasForeignKey(d => d.CustId)
                .HasConstraintName("cust_id");
        });

        modelBuilder.Entity<OrderItem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("order_items");

            entity.HasIndex(e => e.ArtworkId, "artwork_id_idx");

            entity.HasIndex(e => e.OrderId, "order_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ArtworkId).HasColumnName("artwork_id");
            entity.Property(e => e.OrderId).HasColumnName("order_id");

            entity.HasOne(d => d.Artwork).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.ArtworkId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("artwork_id");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.OrderId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("order_id");
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("reviews");

            entity.HasIndex(e => e.ArtistId, "artist1_id_idx");

            entity.HasIndex(e => e.ArtworkId, "artwork1_id_idx");

            entity.HasIndex(e => e.CorporateId, "corporate2_id_idx");

            entity.HasIndex(e => e.CustomerId, "customer2_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ArtistId).HasColumnName("artist_id");
            entity.Property(e => e.ArtworkId).HasColumnName("artwork_id");
            entity.Property(e => e.CorporateId).HasColumnName("corporate_id");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.Review1)
                .HasMaxLength(250)
                .HasColumnName("review");

            entity.HasOne(d => d.Artist).WithMany(p => p.Reviews)
                .HasForeignKey(d => d.ArtistId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("artist1_id");

            entity.HasOne(d => d.Artwork).WithMany(p => p.Reviews)
                .HasForeignKey(d => d.ArtworkId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("artwork1_id");

            entity.HasOne(d => d.Corporate).WithMany(p => p.Reviews)
                .HasForeignKey(d => d.CorporateId)
                .HasConstraintName("corporate2_id");

            entity.HasOne(d => d.Customer).WithMany(p => p.Reviews)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("customer2_id");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.HasIndex(e => e.Id, "id_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Role1, "role_UNIQUE").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Role1)
                .HasMaxLength(80)
                .HasColumnName("role");
        });

        modelBuilder.Entity<Transaction>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("transactions");

            entity.HasIndex(e => e.CorporateId, "corporate_id_idx");

            entity.HasIndex(e => e.CustomerId, "customer_id_idx");

            entity.HasIndex(e => e.OrderId, "order_id_idx").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CorporateId).HasColumnName("corporate_id");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.DateTime)
                .HasColumnType("timestamp")
                .HasColumnName("Date-Time");
            entity.Property(e => e.OrderId).HasColumnName("order_id");
            entity.Property(e => e.Price).HasColumnName("price");

            entity.HasOne(d => d.Corporate).WithMany(p => p.Transactions)
                .HasForeignKey(d => d.CorporateId)
                .HasConstraintName("corporate1_id");

            entity.HasOne(d => d.Customer).WithMany(p => p.Transactions)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("customer1_id");

            entity.HasOne(d => d.Order).WithOne(p => p.Transaction)
                .HasForeignKey<Transaction>(d => d.OrderId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("order1_id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
