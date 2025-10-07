import React from 'react'

const UserDetails = ({ params }: { params: {id: string}}) => {
    const { id } = params;
  return (
    <div>
        UserDetails
        {params.id}
    </div>
  )
}

export default UserDetails