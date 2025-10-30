const http = require('http')
const port = 8000

var motoGP = [
    {
        circuit: 'losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            LastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            LastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            LastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            LastName: 'Dovizioso',
            country: 'Italy'
        }
    }
]

const server = http.createServer((req, res)=>{
    if(req.url=='/'){
        res.write("<h1>Welcome to MotoGP Server - Rahma Aulia</h1>")
    }
    else if(req.url == '/motoGP'){
        res.write("motoGP page\n")
        res.write(JSON.stringify(motoGP))
    }
    else if(req.url == '/country'){
        res.write("winner country\n")
        const Italy = motoGP.filter(s=> s.winner.country == 'Italy')
        const UK = motoGP.filter(s=> s.winner.country == 'UK')
        res.write(JSON.stringify({Italy, UK}))
    }
    else if (req.url=='/winner'){
        res.write("winner's name\n")
        const Andrea = motoGP.filter(s=> (s.winner.firstName +' '+s.winner.LastName) == 'Andrea Dovizioso')
        const Cal = motoGP.filter(s=> (s.winner.firstName +' '+s.winner.LastName) == 'Cal Crutchlow')
        const Valentino = motoGP.filter(s=> (s.winner.firstName +' '+s.winner.LastName)  == 'Valentino Rossi')
        res.write(JSON.stringify({Andrea, Cal, Valentino}))
    }
    else{
        res.write("<h1>Bad Request</h1>")
    }
    res.end()
})
server.listen(port,()=>{
    console.log(`Server Run at http://localhost:${port}`);
})
