//using blot
const t = new bt.Turtle()
const size = 100
const angle = 60 * 180/Math.PI

setDocDimensions(300, 300)

const drawTringle = (a, b, c, s1) => {
  const p1 = {x: Math.cos(Math.PI/180*a)*s1, y: Math.sin(Math.PI/180*a)*s1}
  const s2 = s1 * Math.sin(Math.PI/180 * a)/Math.sin(Math.PI/180 * c)
  const p2 = {x: Math.sin(Math.PI/180*(b-(90-a)))*s2, y: -Math.cos(Math.PI/180*(b-(90-a)))*s2}
  const s3 = Math.cos(Math.PI/180*a)*s1 + Math.sin(Math.PI/180*(b-(90-a)))*s2
  const p3 = {x: -s3, y: 0}
  
  drawLines([
    [[0, 0], Object.values(p1), [p1.x+p2.x, p1.y+p2.y], [p1.x+p2.x+p3.x, p1.y+p2.y+p3.y]]                
  ])
}

drawTringle(50, 30, 100, 100)
//more stuff coming

