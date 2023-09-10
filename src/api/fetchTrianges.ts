export interface TrianglePoints {
    points: {x: number, y: number}[]
}

export async function fetchTriangles(r: number, count: number) {
    return await fetch(`https://cone-server.onrender.com/computeTriangles/${r}/${count}`,
    {
        //mode: 'no-cors',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
        }
    }).then((data) => {return data.json()}).then((data: TrianglePoints) => {return data})
}