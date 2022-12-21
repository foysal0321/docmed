import React, { useState } from 'react';
import AbiableAppormt from './AbiableAppormt';
import AppormBanar from './AppormBanar';

const Appoments = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
          <AppormBanar 
          selected={selected}
          setSelected={setSelected}
          />
          
          <AbiableAppormt 
          selected={selected}
          />
        </div>
    );
};

export default Appoments;