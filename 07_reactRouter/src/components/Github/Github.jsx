import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]) 

    // useEffect(() => {
    //         fetch('https://api.github.com/users/vaibhavbaneshi')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //         })
    //     },[])

  return (
    <div className='bg-gray-600 text-center text-white text-3xl p-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Github Avatar" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vaibhavbaneshi')
    return response.json()
}