export async function loadPosts() {
    const res = await fetch('https://eventapp.city.kawasaki.jp/data/api/v1/events?format=JSON&place=4&page=1')
    const data = await res.json()
  
    return data
  }