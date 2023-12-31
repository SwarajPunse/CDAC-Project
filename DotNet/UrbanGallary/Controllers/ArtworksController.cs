﻿using System;
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
    public class ArtworksController : ControllerBase
    {
        private readonly UrbanGalleryContext _context;

        public ArtworksController(UrbanGalleryContext context)
        {
            _context = context;
        }

        // GET: api/Artworks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Artwork>>> GetArtworks()
        {
          if (_context.Artworks == null)
          {
              return NotFound();
          }
            return await _context.Artworks.ToListAsync();
        }

        // GET: api/Artworks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Artwork>> GetArtwork(int id)
        {
          if (_context.Artworks == null)
          {
              return NotFound();
          }
            var artwork = await _context.Artworks.FindAsync(id);

            if (artwork == null)
            {
                return NotFound();
            }

            return artwork;
        }

        // PUT: api/Artworks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArtwork(int id, Artwork artwork)
        {
            if (id != artwork.Id)
            {
                return BadRequest();
            }

            _context.Entry(artwork).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtworkExists(id))
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

        // POST: api/Artworks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Artwork>> PostArtwork(Artwork artwork)
        {
          if (_context.Artworks == null)
          {
              return Problem("Entity set 'UrbanGalleryContext.Artworks'  is null.");
          }
            _context.Artworks.Add(artwork);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArtwork", new { id = artwork.Id }, artwork);
        }

        // DELETE: api/Artworks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtwork(int id)
        {
            if (_context.Artworks == null)
            {
                return NotFound();
            }
            var artwork = await _context.Artworks.FindAsync(id);
            if (artwork == null)
            {
                return NotFound();
            }

            _context.Artworks.Remove(artwork);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtworkExists(int id)
        {
            return (_context.Artworks?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
