using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TodosData.Migrations
{
    public partial class OwnerImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageURL",
                table: "Owners",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 1,
                column: "DueDate",
                value: new DateTime(2022, 3, 24, 13, 32, 47, 883, DateTimeKind.Local).AddTicks(6528));

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 2,
                column: "DueDate",
                value: new DateTime(2022, 3, 26, 13, 32, 47, 886, DateTimeKind.Local).AddTicks(2238));

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 3,
                column: "DueDate",
                value: new DateTime(2022, 3, 24, 13, 32, 47, 886, DateTimeKind.Local).AddTicks(2281));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageURL",
                table: "Owners");

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 1,
                column: "DueDate",
                value: new DateTime(2022, 3, 17, 14, 10, 34, 342, DateTimeKind.Local).AddTicks(2259));

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 2,
                column: "DueDate",
                value: new DateTime(2022, 3, 19, 14, 10, 34, 347, DateTimeKind.Local).AddTicks(1466));

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 3,
                column: "DueDate",
                value: new DateTime(2022, 3, 17, 14, 10, 34, 347, DateTimeKind.Local).AddTicks(1560));
        }
    }
}
