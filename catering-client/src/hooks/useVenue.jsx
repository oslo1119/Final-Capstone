import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query';

const useVenue = () => {
    const axiosPublic = useAxiosPublic();

    const {data: venues =[], isPending: loading, refetch} = useQuery({
        queryKey: ['venues'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/venues`);
            console.log(res.data)
            return res.data;
          },
    })

  return [venues, loading, refetch]
}

export default useVenue