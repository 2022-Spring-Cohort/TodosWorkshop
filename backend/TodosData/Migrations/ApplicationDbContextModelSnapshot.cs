// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TodosData;

namespace TodosData.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.15")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TodosData.Models.Owner", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ImageURL")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Owners");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Gavin Hensley"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Carlos Lopez"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Davis Murphy"
                        });
                });

            modelBuilder.Entity("TodosData.Models.Todo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DueDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("OwnerId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("Todos");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Test Todo",
                            DueDate = new DateTime(2022, 4, 6, 10, 14, 33, 829, DateTimeKind.Local).AddTicks(7284),
                            OwnerId = 3,
                            Title = "Todo Item 1"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Seriously, clean it.",
                            DueDate = new DateTime(2022, 4, 8, 10, 14, 33, 833, DateTimeKind.Local).AddTicks(9081),
                            OwnerId = 1,
                            Title = "Clean living room"
                        },
                        new
                        {
                            Id = 3,
                            Description = "",
                            DueDate = new DateTime(2022, 4, 6, 10, 14, 33, 833, DateTimeKind.Local).AddTicks(9133),
                            OwnerId = 3,
                            Title = "Teach class"
                        });
                });

            modelBuilder.Entity("TodosData.Models.Vehicle", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Make")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Model")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OwnerId")
                        .HasColumnType("int");

                    b.Property<string>("Year")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("Vehicles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Make = "Ford",
                            Model = "Fusion",
                            OwnerId = 1,
                            Year = "2019"
                        },
                        new
                        {
                            Id = 2,
                            Make = "Toyota",
                            Model = "Camry",
                            OwnerId = 1,
                            Year = "2018"
                        },
                        new
                        {
                            Id = 3,
                            Make = "Tesla",
                            Model = "Model X",
                            OwnerId = 1,
                            Year = "2020"
                        });
                });

            modelBuilder.Entity("TodosData.Models.Todo", b =>
                {
                    b.HasOne("TodosData.Models.Owner", "Owner")
                        .WithMany("Todos")
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("TodosData.Models.Vehicle", b =>
                {
                    b.HasOne("TodosData.Models.Owner", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("TodosData.Models.Owner", b =>
                {
                    b.Navigation("Todos");
                });
#pragma warning restore 612, 618
        }
    }
}
