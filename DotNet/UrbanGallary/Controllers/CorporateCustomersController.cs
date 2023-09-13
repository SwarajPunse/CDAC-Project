using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UrbanGallary.Models;

namespace UrbanGallary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CorporateCustomersController : ControllerBase
    {
        private readonly UrbanGalleryContext _context;

        public CorporateCustomersController(UrbanGalleryContext context)
        {
            _context = context;
        }

        // GET: api/CorporateCustomers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CorporateCustomer>>> GetCorporateCustomers()
        {
          if (_context.CorporateCustomers == null)
          {
              return NotFound();
          }
            return await _context.CorporateCustomers.ToListAsync();
        }

        // GET: api/CorporateCustomers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CorporateCustomer>> GetCorporateCustomer(int id)
        {
          if (_context.CorporateCustomers == null)
          {
              return NotFound();
          }
            var corporateCustomer = await _context.CorporateCustomers.FindAsync(id);

            if (corporateCustomer == null)
            {
                return NotFound();
            }

            return corporateCustomer;
        }

        // PUT: api/CorporateCustomers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCorporateCustomer(int id, CorporateCustomer corporateCustomer)
        {
            if (id != corporateCustomer.Id)
            {
                return BadRequest();
            }

            _context.Entry(corporateCustomer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CorporateCustomerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CorporateCustomers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CorporateCustomer>> PostCorporateCustomer(CorporateCustomer corporateCustomer)
        {
          if (_context.CorporateCustomers == null)
          {
              return Problem("Entity set 'UrbanGalleryContext.CorporateCustomers'  is null.");
          }
            _context.CorporateCustomers.Add(corporateCustomer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCorporateCustomer", new { id = corporateCustomer.Id }, corporateCustomer);
        }

        // DELETE: api/CorporateCustomers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCorporateCustomer(int id)
        {
            if (_context.CorporateCustomers == null)
            {
                return NotFound();
            }
            var corporateCustomer = await _context.CorporateCustomers.FindAsync(id);
            if (corporateCustomer == null)
            {
                return NotFound();
            }

            _context.CorporateCustomers.Remove(corporateCustomer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CorporateCustomerExists(int id)
        {
            return (_context.CorporateCustomers?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
