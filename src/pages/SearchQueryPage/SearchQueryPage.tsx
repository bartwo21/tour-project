import React from 'react'

type Props = {
    query: string;
}

const SearchQueryPage = ({ query }: Props) => {
  return (
    <div>Aradığınız : {query}</div>
    // query obje olacak ve içindeki değerler sayfada gösterilecek
  )
}

export default SearchQueryPage