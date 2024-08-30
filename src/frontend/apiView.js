export function ApiView({ champions, apiItem }) {
  const champion = apiItem && champions ? champions[apiItem] : null

  return (
    <div>
      {champion ? (
        <div>
          <div>{champion.name}</div>
          <div>{champion.title}</div>
          <div>{champion.blurb}</div>
          <div>{champion.tags.join(', ')}</div>
        </div>
      ) : (
          <div>No champion found.</div>
      )}
    </div>
  )
}


