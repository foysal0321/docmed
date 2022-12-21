import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Options from './Options';

const AbiableAppormt = ({selected}) => {
  //  const [apporment,setapporment] = useState([]);
    const [modal,setmodal] = useState(null);
    const date = format(selected, 'PP')

    const {data: apporment= [], refetch} = useQuery({
        queryKey: ['options', date],
        queryFn: async ()=> {
            const res = await fetch(`https://doctors-protal-server-eight.vercel.app/options?date=${date}`)
            const data = await res.json()
            return data
        }
    })

    return (
        <section className='mt-16'>
            <p className='text-center text-primary font-bold py-3'>Available Appointments on {format(selected, 'PP') }</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 my-10">
                {
                    apporment.map(d=> <Options
                    key={d._id}
                    data={d}
                    setmodal={setmodal}
                    ></Options>)
                }
                {
                    modal &&
                    <Modal 
                    modal={modal}
                    selected={selected}
                    setmodal={setmodal}
                    refetch={refetch}
                    />
                }
                
            </div>
        </section>
    );
};

export default AbiableAppormt;