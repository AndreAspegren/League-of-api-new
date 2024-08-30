export async function getUser(user){
    
}

export async function getChampions(getapiChampions){
    try {
        let response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion.json')
        let data = await response.json()
        getapiChampions(data.data)
        console.log(data.data)
    } catch (error) {
        console.error('Error fetching champions:', error)
    }
}