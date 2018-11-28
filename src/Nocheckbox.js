import React from 'react';

function Nocheckbox() {
  return <input type="checkbox" onClick={(event) => { event.preventDefault(); }} />
}

export default Nocheckbox;
