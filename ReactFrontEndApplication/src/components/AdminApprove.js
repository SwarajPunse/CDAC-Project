import React from 'react';

function AdminApprove({ artist }) {
  return (
    <div>
      <h3>{artist.name}</h3>
      {/* Display artist details */}
      <button>Approve</button>
      <button>Reject</button>
    </div>
  );
}

export default AdminApprove;
